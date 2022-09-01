import React, { useContext, useState } from 'react';
import { Navigate } from 'react-router-dom';
import UserForm from '../UserForm';
import { signup } from '../../api/authentication';
import { setTokenData } from '../../utils/tokenHelper';
import AuthContext from '../../utils/authContext';

const Signup: React.FC = () => {
  const [errorMessage, setErrorMessage] = useState('');

  const auth = useContext(AuthContext);

  if (auth?.isAuthenticated) {
    return <Navigate replace to="/" />;
  }

  const onSubmit = async (email: string, password: string) => {
    try {
      const data = await signup(email, password);
      setTokenData(data);
      auth?.setIsAuthenticated(true);
    } catch (e: any) {
      if (e?.response?.status === 400) {
        setErrorMessage(e.response.data.message);
      } else {
        setErrorMessage('An unexpected error has occurred');
      }
    }
  };

  return (
    <React.Fragment>
      <h1>Signup</h1>
      {errorMessage !== '' && <p className="font-bold text-red-600 mb-2">{errorMessage}</p>}
      <p className="text-xs">
        {"You can use a totally fake email here but shh, don't tell anyone."}
      </p>
      <UserForm buttonLabel="Sign up" onSubmit={onSubmit} />
    </React.Fragment>
  );
};

export default Signup;
