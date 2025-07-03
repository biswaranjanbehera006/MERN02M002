import React from 'react';
import { useNavigate } from 'react-router';

function Home() {
  const navigate = useNavigate();

  const handleExplore = () => {
    navigate('/movies');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex flex-col items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-white text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">
          Welcome to CineVerse
        </h1>
        <p className="text-gray-300 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          Dive into a world of amazing movies, trending trailers, and epic stories. Your movie journey starts here.
        </p>
        <button
          onClick={handleExplore}
          className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300"
        >
          Explore Now
        </button>
      </div>
    </div>
  );
}

export default Home;
