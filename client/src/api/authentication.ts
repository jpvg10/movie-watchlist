import axios from 'axios';
import { IToken } from '../utils/interfaces';
import { getTokenData } from '../utils/tokenHelper';

export const signup = async (email: string, password: string): Promise<IToken> => {
  const result = await axios.request<IToken>({
    method: 'post',
    url: '/api/users/signup',
    data: {
      email: email,
      password: password
    }
  });

  return result.data;
};

export const login = async (email: string, password: string): Promise<IToken> => {
  const result = await axios.request<IToken>({
    method: 'post',
    url: '/api/users/login',
    data: {
      email: email,
      password: password
    }
  });

  return result.data;
};

export const logout = async (): Promise<void> => {
  await axios.request<void>({
    method: 'post',
    url: '/api/users/logout',
    headers: { Authorization: `Bearer ${getTokenData()?.token}` }
  });
};
