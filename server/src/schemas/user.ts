import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { IUserDocument, IPayload } from '../interfaces';

const UserSchema = new mongoose.Schema<IUserDocument>({
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    trim: true,
    lowercase: true
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
    trim: true,
    minlength: [7, 'Password should have at least 7 characters']
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

UserSchema.pre<IUserDocument>('save', async function (next: (err?: Error) => void) {
  if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 8);
  }
  next();
});

export default UserSchema;
