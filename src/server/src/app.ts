import path from 'path';
import express, { Request, Response } from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

const app = express();

// local environment variables
if (process.env.NODE_ENV !== 'production') {
  dotenv.config();
}

// mongoose
mongoose.connect(process.env.MONGODB_URI as string, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// parsers
app.use(express.json());

// static files
app.use(express.static(path.join(__dirname, '..', '..', 'client', 'build')));

// middleware
// app.use('/api', require('./middleware/auth-check'));

// routes
// app.use('/api', require('./routes'));

// error handling
app.use((err: Error, req: Request, res: Response) => {
  console.log(err.message);
  res.status(500).send({ Error: err.message });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});