import mongoose from 'mongoose';
import { IMovieDocument } from '../interfaces';
import ListSchema from '../schemas/movie';

export default mongoose.model<IMovieDocument>('Movie', ListSchema);
