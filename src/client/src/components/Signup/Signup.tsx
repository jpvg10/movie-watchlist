import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import UserForm from '../UserForm';
import { signup } from '../../api/authentication';
import { setTokenData } from '../../utils/tokenHelper';
import AuthContext from '../../utils/authContext';

const Signup: React.FC = () => {
  const auth = useContext(AuthContext);

  if (auth?.isAuthenticated) {
    return <Redirect to="/" />;
  }

  const onSubmit = async (email: string, password: string) => {
    try {
      const data = await signup(email, password);
      setTokenData(data);
      auth?.setIsAuthenticated(true);
    } catch (e) {}
  };

  return (
    <React.Fragment>
      <h1>Signup</h1>
      <UserForm buttonLabel="Sign up" onSubmit={onSubmit} />
    </React.Fragment>
  );
};

export default Signup;
