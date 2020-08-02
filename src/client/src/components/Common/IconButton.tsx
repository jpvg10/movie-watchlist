import React from 'react';

interface IProps {
  onClick(): void;
  color: 'green' | 'red';
}

const IconButton: React.FC<IProps> = ({ onClick, color, children }) => {
  const buttonColor = color === 'green' ? 'green-400' : 'red-600';
  return (
    <button
      onClick={onClick}
      className={`mb-1 rounded hover:bg-gray-200 border-2 border-${buttonColor} text-${buttonColor} py-2 px-2 focus:outline-none focus:shadow-outline`}
    >
      {children}
    </button>
  );
};

export default IconButton;
