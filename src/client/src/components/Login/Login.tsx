import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import UserForm from '../UserForm';
import { login } from '../../api/authentication';
import { setTokenData } from '../../utils/tokenHelper';
import AuthContext from '../../utils/authContext';

const Login: React.FC = () => {
  const auth = useContext(AuthContext);

  if (auth?.isAuthenticated) {
    return <Redirect to="/" />;
  }

  const onSubmit = async (email: string, password: string) => {
    try {
      const data = await login(email, password);
      setTokenData(data);
      auth?.setIsAuthenticated(true);
    } catch (e) {}
  };

  return (
    <React.Fragment>
      <h1>Login</h1>
      <UserForm isLogin={true} onSubmit={onSubmit} />
    </React.Fragment>
  );
};

export default Login;
