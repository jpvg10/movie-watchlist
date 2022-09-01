import { IUserDocument } from '../../src/interfaces';

declare global {
  namespace Express {
    interface Request {
      user: IUserDocument;
      token: string;
    }
  }
}
