import React from 'react';

interface IProps {
  onClick(): void;
  color: 'green' | 'red';
}

const IconButton: React.FC<IProps> = ({ onClick, color, children }) => {
  const borderColor = color === 'green' ? 'border-green-400' : 'border-red-600';
  const textColor = color === 'green' ? 'text-green-400' : 'text-red-600';
  return (
    <button
      onClick={onClick}
      className={`mb-1 rounded hover:bg-gray-200 border-2 ${borderColor} ${textColor} py-2 px-2 focus:outline-none focus:shadow-outline`}
    >
      {children}
    </button>
  );
};

export default IconButton;
