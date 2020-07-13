import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { IUser, IPayload } from '../interfaces';

const UserSchema = new mongoose.Schema<IUser>({
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true,
    trim: true,
    minlength: 7
  },
  tokens: [
    {
      token: {
        type: String,
        required: true
      }
    }
  ]
});

UserSchema.methods.toJSON = function () {
  const userObject = this.toObject();
  delete userObject.password;
  delete userObject.tokens;
  return userObject;
};

UserSchema.methods.generateAuthToken = async function () {
  const secret = process.env.JWT_SECRET as string;
  const payload: IPayload = { _id: this._id.toString() };
  const token = jwt.sign(payload, secret);
  this.tokens = this.tokens.concat({ token });
  await this.save();
  return token;
};

UserSchema.pre<IUser>('save', async function (next: mongoose.HookNextFunction) {
  if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 8);
  }
  next();
});

export default UserSchema;
