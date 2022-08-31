import React from 'react';
import { useNavigate } from 'react-router-dom';
import VideoCamera from './video-camera.png';

const Error404: React.FC = () => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate('-1', { replace: true });
  };
  return (
    <React.Fragment>
      <img src={VideoCamera} alt="404 error" className="" />
      <p className="mb-2">{"Opps! It seems the page you're looking for doesn't exist"}</p>
      <button
        onClick={goBack}
        className="font-bold rounded hover:bg-gray-200 border-blue-500 text-blue-500 border-2 py-2 px-2 focus:outline-none focus:shadow-outline"
      >
        Go back
      </button>
    </React.Fragment>
  );
};

export default Error404;
