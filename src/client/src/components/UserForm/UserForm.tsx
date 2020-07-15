import React, { useState } from 'react';

interface IProps {
  onSubmit(email: string, passowrd: string): Promise<void>;
  isLogin: boolean;
}

const UserForm: React.FC<IProps> = ({ isLogin, onSubmit }) => {
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
    <form onSubmit={submit}>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
          Email
        </label>
        <input
          id="email"
          className="focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal mb-4"
          type="text"
          placeholder="Email"
          value={email}
          onChange={onChangeEmail}
        ></input>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="password">
          Password
        </label>
        <input
          id="password"
          className="focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
          type="password"
          placeholder="Password"
          value={password}
          onChange={onChangePassword}
        ></input>
      </div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="submit"
      >
        {isLogin ? 'Log  in' : 'Sign up'}
      </button>
    </form>
  );
};

export default UserForm;
