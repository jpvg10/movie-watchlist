import React from 'react';

interface IProps {
  label: string;
}

const SubmitButton: React.FC<IProps> = ({ label }) => {
  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mb-4"
      type="submit"
    >
      {label}
    </button>
  );
};

export default SubmitButton;
