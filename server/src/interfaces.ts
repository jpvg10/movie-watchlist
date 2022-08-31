import { Document, Types } from 'mongoose';

interface IUserDocument extends Document {
  email: string;
  password: string;
  tokens: { token: string }[];
}

export interface IUser extends IUserDocument {
  generateAuthToken(): Promise<string>;
  toJSON(): any;
}

export interface IMovie {
  name: string;
  stars?: number;
  isFavorite: boolean;
  _user: Types.ObjectId;
}

export type IMovieDocument = Document;

export interface IPayload {
  _id: string;
}
