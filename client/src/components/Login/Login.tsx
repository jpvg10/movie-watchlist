import React, { useContext, useState } from 'react';
import { Redirect } from 'react-router-dom';
import UserForm from '../UserForm';
import { login } from '../../api/authentication';
import { setTokenData } from '../../utils/tokenHelper';
import AuthContext from '../../utils/authContext';

const Login: React.FC = () => {
  const [errorMessage, setErrorMessage] = useState('');

  const auth = useContext(AuthContext);

  if (auth?.isAuthenticated) {
    return <Redirect to="/" />;
  }

  const onSubmit = async (email: string, password: string) => {
    try {
      const data = await login(email, password);
      setTokenData(data);
      auth?.setIsAuthenticated(true);
    } catch (e) {
      if (e?.response?.status === 400) {
        setErrorMessage(e.response.data.message);
      } else {
        setErrorMessage('An unexpected error has occurred');
      }
    }
  };

  return (
    <React.Fragment>
      <h1>Login</h1>
      {errorMessage !== '' && <p className="font-bold text-red-600 mb-2">{errorMessage}</p>}
      <UserForm buttonLabel="Log in" onSubmit={onSubmit} />
    </React.Fragment>
  );
};

export default Login;
