import React from 'react';
import UserForm from '../UserForm';

const Login: React.FC = () => {
  return (
    <React.Fragment>
      <h1>Login</h1>
      <UserForm isLogin={true} />
    </React.Fragment>
  );
};

export default Login;
