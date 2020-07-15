import React from 'react';
import { IAuthContext } from './interfaces';

const AuthContext = React.createContext<IAuthContext | null>(null);

export default AuthContext;
