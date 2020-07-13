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
}

export interface IFavoriteMovie extends IMovie {
  name: string;
  stars?: number;
}

export interface IListDocument extends Document {
  _user: Types.ObjectId;
  watchlist: IMovie[];
  favorites: IFavoriteMovie[];
}

export interface IPayload {
  _id: string;
}
