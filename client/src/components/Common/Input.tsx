import React from 'react';

interface IProps {
  label: string;
  id: string;
  placeholder: string;
  type?: string;
  value: string;
  onChange(e: React.ChangeEvent<HTMLInputElement>): void;
}

const Input: React.FC<IProps> = ({ label, id, placeholder, value, onChange, type = 'text' }) => {
  return (
    <div className="mb-4">
      <label className="block text-gray-700 font-bold mb-2" htmlFor={id}>
        {label}
      </label>
      <input
        id={id}
        className="focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full mb-4"
        autoComplete="off"
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      ></input>
    </div>
  );
};

export default Input;
