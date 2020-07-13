import mongoose, { Model } from 'mongoose';
import bcrypt from 'bcrypt';
import UserSchema from '../schemas/user';
import { IUser } from '../interfaces';

export interface IUserModel extends Model<IUser> {
  findByCredentials(email: string, password: string): Promise<IUser>;
}

UserSchema.statics.findByCredentials = async (email: string, password: string): Promise<IUser> => {
  const user = await User.findOne({ email });
  if (!user) throw new Error('Unable to log in');

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) throw new Error('Unable to log in');

  return user;
};

const User = mongoose.model<IUser, IUserModel>('User', UserSchema);

export default User;
