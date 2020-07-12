import { Document, Types } from 'mongoose';

export interface IUser extends Document {
  email: string;
  password: string;
}

export interface IMovie {
  name: string;
}

export interface IFavoriteMovie extends IMovie {
  stars?: number;
}

export interface IList extends Document {
  _user: Types.ObjectId;
  watchlist: IMovie[];
  favorites: IFavoriteMovie[];
}
