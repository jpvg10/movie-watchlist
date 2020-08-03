import React from 'react';
import { MdErrorOutline } from 'react-icons/md';

const UnknownError: React.FC = () => {
  return (
    <React.Fragment>
      <div className="flex justify-center">
        <MdErrorOutline className="text-red-600 text-3xl " />
      </div>
      <p className="text-center">An unknown error occurred. Please try again later.</p>
    </React.Fragment>
  );
};

export default UnknownError;
