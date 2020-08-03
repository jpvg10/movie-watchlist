import React from 'react';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <div className="w-full bg-gray-200">
      <div className="container mx-auto px-4 py-2 flex">
        <div className="flex-grow">
          <p>Juan Pablo Valencia, {year}</p>
          <a
            href="https://github.com/jpvg10/movie-watchlist"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Check this project on GitHub
          </a>
        </div>
        <p>
          Icons by{' '}
          <a
            href="https://www.flaticon.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            www.flaticon.com
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
