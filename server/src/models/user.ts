import mongoose, { Model } from 'mongoose';
import bcrypt from 'bcrypt';
import UserSchema from '../schemas/user';
import { IUserDocument } from '../interfaces';

export interface IUserModel extends Model<IUserDocument> {
  findByCredentials(email: string, password: string): Promise<IUserDocument>;
}

UserSchema.statics.findByCredentials = async (
  email: string,
  password: string
): Promise<IUserDocument> => {
  const user = await User.findOne({ email });
  if (!user) throw new Error('Wrong email or password');

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) throw new Error('Wrong email or password');

  return user;
};

const User = mongoose.model<IUserDocument, IUserModel>('User', UserSchema);

export default User;
