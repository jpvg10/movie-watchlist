import mongoose from 'mongoose';
import { IUser } from '../interaces';
import UserSchema from '../schemas/user';

export default mongoose.model<IUser>('User', UserSchema);
