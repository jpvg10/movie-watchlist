export interface IAuthContext {
  isAuthenticated: boolean;
  setIsAuthenticated(value: boolean): void;
}

export interface IToken {
  token: string;
  email: string;
}

export interface IMovie {
  name: string;
}

export interface IFavoriteMovie extends IMovie {
  stars: number;
}
