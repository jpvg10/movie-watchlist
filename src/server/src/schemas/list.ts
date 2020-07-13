import mongoose from 'mongoose';
import { IListDocument } from '../interfaces';

const ListSchema = new mongoose.Schema<IListDocument>({
  _user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  watchlist: {
    type: [
      {
        name: {
          type: String,
          required: true
        }
      }
    ],
    default: []
  },
  favorites: {
    type: [
      {
        name: {
          type: String,
          required: true
        },
        stars: {
          type: Number,
          required: false,
          default: 0
        }
      }
    ],
    default: []
  }
});

export default ListSchema;
