import { IToken } from './interfaces';

export const setTokenData = (data: IToken): void => {
  localStorage.setItem('tokenData', JSON.stringify(data));
};

export const deleteTokenData = (): void => {
  localStorage.removeItem('tokenData');
};

export const getTokenData = (): IToken | null => {
  const tokenData = localStorage.getItem('tokenData');
  if (!tokenData) return null;
  return JSON.parse(tokenData);
};
