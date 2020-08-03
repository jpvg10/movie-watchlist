import mongoose from 'mongoose';
import { IMovieDocument } from '../interfaces';

const MovieSchema = new mongoose.Schema<IMovieDocument>({
  name: {
    type: String,
    required: true
  },
  stars: {
    type: Number,
    required: false,
    default: 0
  },
  isFavorite: {
    type: Boolean,
    required: true
  },
  _user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
});

export default MovieSchema;
