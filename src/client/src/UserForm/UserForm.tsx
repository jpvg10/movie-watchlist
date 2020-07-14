import React from 'react';

interface IProps {
  isLogin: boolean;
}

const UserForm: React.FC<IProps> = ({ isLogin }) => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
          Email
        </label>
        <input
          id="email"
          className="focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal mb-4"
          type="text"
          placeholder="Email"
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
