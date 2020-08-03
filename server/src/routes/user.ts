import express from 'express';
import User from '../models/user';
import auth from '../middleware/auth';

const router = express.Router();

router.post('/users/signup', async (req, res) => {
  const user = new User(req.body);

  try {
    await user.save();
    const token = await user.generateAuthToken();
    res.status(201).send({ email: user.email, token });
  } catch (e) {
    if (e?.errors?.email?.properties?.message) {
      res.status(400).send({ message: e.errors.email.properties.message });
    } else if (e?.errors?.password?.properties?.message) {
      res.status(400).send({ message: e.errors.password.properties.message });
    } else if ((e?.message as string).includes('duplicate key error')) {
      res.status(400).send({ message: 'This email is already in use' });
    } else {
      res.status(500).send();
    }
  }
});

router.post('/users/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findByCredentials(email, password);
    const token = await user.generateAuthToken();
    res.status(200).send({ email: user.email, token });
  } catch (e) {
    if (e?.message) {
      res.status(400).send({ message: e.message });
    } else {
      res.status(500).send();
    }
  }
});

router.post('/users/logout', auth, async (req, res) => {
  try {
    req.user.tokens = req.user.tokens.filter((token) => token.token !== req.token);
    await req.user.save();

    res.status(200).send();
  } catch (e) {
    res.status(500).send();
  }
});

router.get('/users/me', auth, async (req, res) => {
  res.status(200).send(req.user);
});

export default router;
