export interface IAuthContext {
  isAuthenticated: boolean;
  setIsAuthenticated(value: boolean): void;
}

export interface IToken {
  token: string;
  email: string;
}
