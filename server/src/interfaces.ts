import { Document, Types } from 'mongoose';

export interface IUserDocument extends Document {
  email: string;
  password: string;
  tokens: { token: string }[];
  generateAuthToken(): Promise<string>;
  toJSON(): any;
}

export interface IMovie {
  name: string;
  stars?: number;
  isFavorite: boolean;
  _user: Types.ObjectId;
}

export interface IMovieDocument extends IMovie, Document {}

export interface IPayload {
  _id: string;
}
