import mongoose from 'mongoose';
import { IList } from '../interaces';
import ListSchema from '../schemas/list';

export default mongoose.model<IList>('List', ListSchema);
