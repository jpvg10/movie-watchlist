import React from 'react';
import { FaStar, FaRegStar } from 'react-icons/fa';

interface IStarButtonProps {
  onClick(): void;
}

interface IStarsProps {
  value: number;
  onChange(value: number): () => void;
}

const StarButton: React.FC<IStarButtonProps> = ({ onClick, children }) => {
  return (
    <button onClick={onClick} className="text-yellow-500 focus:outline-none focus:shadow-outline">
      {children}
    </button>
  );
};

const Stars: React.FC<IStarsProps> = ({ value, onChange }) => {
  const stars: React.ReactNode[] = [];

  for (let i = 1; i <= value; i++) {
    stars.push(
      <StarButton key={`star-${i}`} onClick={onChange(i)}>
        <FaStar />
      </StarButton>
    );
  }

  for (let i = value + 1; i <= 5; i++) {
    stars.push(
      <StarButton key={`star-${i}`} onClick={onChange(i)}>
        <FaRegStar />
      </StarButton>
    );
  }

  return <div className="flex">{stars}</div>;
};

export default Stars;
