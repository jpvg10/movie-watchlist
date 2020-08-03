import path from 'path';
import express, { Request, Response, NextFunction } from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import helmet from 'helmet';
import morgan from 'morgan';
import routes from './routes';

const app = express();

app.use(helmet());
app.use(morgan('dev'));

// local environment variables
if (process.env.NODE_ENV !== 'production') {
  dotenv.config();
}

// mongoose
mongoose
  .connect(process.env.MONGODB_URI as string, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
  })
  .then(() => {
    console.log('Database connected');
  })
  .catch((error) => {
    console.log('Database connection failed');
    console.log(error);
  });

// parsers
app.use(express.json());

// static files
app.use(express.static(path.join(__dirname, '..', '..', 'client', 'build')));

// routes
app.use('/api', routes);

app.use('/', (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, '..', '..', 'client', 'build', 'index.html'));
});

// error handling
app.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {
  console.log(err);
  res.status(500).send({ Error: err.message });
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
