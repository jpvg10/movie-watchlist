import React, { useState } from 'react';
import Input from '../Common/Input';
import SubmitButton from '../Common/SubmitButton';

interface IProps {
  buttonLabel: string;
  onSubmit(email: string, passowrd: string): Promise<void>;
}

const UserForm: React.FC<IProps> = ({ buttonLabel, onSubmit }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(email, password);
  };

  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value as string);
  };

  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value as string);
  };

  return (
    <form onSubmit={submit} className="w-full sm:w-1/2 md:w-4/12">
      <Input
        label="Email"
        id="email"
        placeholder="Enter your email"
        value={email}
        onChange={onChangeEmail}
      />
      <Input
        label="Password"
        id="password"
        placeholder="Enter your password"
        type="password"
        value={password}
        onChange={onChangePassword}
      />
      <SubmitButton label={buttonLabel} />
    </form>
  );
};

export default UserForm;
