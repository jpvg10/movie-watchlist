import React from 'react';
import UserForm from '../UserForm';

const Signup: React.FC = () => {
  return (
    <React.Fragment>
      <h1>Signup</h1>
      <UserForm isLogin={false} />
    </React.Fragment>
  );
};

export default Signup;
