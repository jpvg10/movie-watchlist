import React, { useState } from 'react';
import Input from '../Common/Input';
import SubmitButton from '../Common/SubmitButton';

interface IProps {
  label: string;
  buttonLabel: string;
  onSubmit(name: string): Promise<void>;
}

const AddMovieForm: React.FC<IProps> = ({ label, buttonLabel, onSubmit }) => {
  const [name, setName] = useState('');

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(name);
    setName('');
  };

  const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value as string);
  };

  return (
    <form onSubmit={submit} className="flex items-end">
      <div className="w-4/12 mr-4">
        <Input
          label={label}
          id="movie-name"
          placeholder="Name of the movie"
          value={name}
          onChange={onChangeName}
        />
      </div>
      <div className="">
        <SubmitButton label={buttonLabel} />
      </div>
    </form>
  );
};

export default AddMovieForm;
