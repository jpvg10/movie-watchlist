import jwt from 'jsonwebtoken';
import { RequestHandler } from 'express';
import User from '../models/user';
import { IPayload } from '../interfaces';

const auth: RequestHandler = async (req, res, next) => {
  try {
    const token = req.header('Authorization')?.replace('Bearer ', '') as string;
    const secret = process.env.JWT_SECRET as string;
    const decoded = jwt.verify(token, secret) as IPayload;
    const user = await User.findOne({ _id: decoded._id, 'tokens.token': token });

    if (!user) throw new Error();

    req.token = token;
    req.user = user;
    next();
  } catch (e) {
    res.status(401).send({ error: 'Please authenticate' });
  }
};

export default auth;
