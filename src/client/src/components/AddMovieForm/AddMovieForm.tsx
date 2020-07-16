import React, { useState } from 'react';

interface IProps {
  onSubmit(name: string): Promise<void>;
}

const AddMovieForm: React.FC<IProps> = ({ onSubmit }) => {
  const [name, setName] = useState('');

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(name);
  };

  const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value as string);
  };

  return (
    <form onSubmit={submit}>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
          Name
        </label>
        <input
          id="name"
          className="focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal mb-4"
          type="text"
          placeholder="Name"
          value={name}
          onChange={onChangeName}
        ></input>
      </div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="submit"
      >
        Add movie
      </button>
    </form>
  );
};

export default AddMovieForm;
