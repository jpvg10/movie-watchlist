import mongoose from 'mongoose';
import { IListDocument } from '../interfaces';
import ListSchema from '../schemas/list';

export default mongoose.model<IListDocument>('List', ListSchema);
