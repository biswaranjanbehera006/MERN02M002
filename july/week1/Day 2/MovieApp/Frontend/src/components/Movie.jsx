import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useNavigate } from "react-router";

const Movie = () => {
  const params = useParams();
  const api = import.meta.env.VITE_IMDB_API;
  const [movieDetails, setMovieDetails] = useState({});
  const navigate=useNavigate();

  const handelGetMovie = async () => {
    try {
      const url = api + "&i=" + params.id;
      const result = await axios.get(url);

      if (result?.data) {
        setMovieDetails(result.data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    handelGetMovie();
  }, []);

  return (
<div className="min-h-screen bg-gray-100 p-4 md:p-10">
  {/* Back Button */}
  <div className="max-w-6xl mx-auto mb-6">
    <button
      onClick={() => navigate("/")}
      className="bg-blue-600 text-white px-5 py-2 rounded-lg shadow hover:bg-blue-700 transition-all"
    >
      ⬅ Home
    </button>
  </div>

  {/* Movie Card */}
  <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
    <div className="grid md:grid-cols-2 gap-6">
      
      {/* Movie Poster */}
      <div className="p-4">
        <img
          src={movieDetails?.Poster}
          alt={movieDetails?.Title}
          className="w-full h-auto rounded-xl shadow-md"
        />
      </div>

      {/* Movie Details */}
      <div className="p-6 flex flex-col gap-4 text-blue-950">
        <h1 className="text-4xl font-bold mb-2">{movieDetails?.Title}</h1>

        <p className="text-gray-700 text-base italic">{movieDetails?.Plot}</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4 text-sm sm:text-base">
          <p><span className="font-semibold">Actors:</span> {movieDetails?.Actors}</p>
          <p><span className="font-semibold">Director:</span> {movieDetails?.Director}</p>
          <p><span className="font-semibold">Genre:</span> {movieDetails?.Genre}</p>
          <p><span className="font-semibold">Language:</span> {movieDetails?.Language}</p>
          <p><span className="font-semibold">Rated:</span> {movieDetails?.Rated}</p>
          <p><span className="font-semibold">Runtime:</span> {movieDetails?.Runtime}</p>
          <p><span className="font-semibold">Release Date:</span> {movieDetails?.Released}</p>
          <p><span className="font-semibold">Country:</span> {movieDetails?.Country}</p>
          <p><span className="font-semibold">Box Office:</span> {movieDetails?.BoxOffice}</p>
          <p><span className="font-semibold">Metascore:</span> {movieDetails?.Metascore}</p>
          <p><span className="font-semibold">IMDB Rating:</span> ⭐ {movieDetails?.imdbRating}</p>
          <p><span className="font-semibold">IMDB Votes:</span> {movieDetails?.imdbVotes}</p>
          <p><span className="font-semibold">Awards:</span> {movieDetails?.Awards}</p>
          <p><span className="font-semibold">Year:</span> {movieDetails?.Year}</p>
          <p><span className="font-semibold">Type:</span> {movieDetails?.Type}</p>
        </div>

        {/* Ratings (if available) */}
        {movieDetails?.Ratings && movieDetails.Ratings.length > 0 && (
          <div className="mt-6">
            <h2 className="text-xl font-semibold mb-2">Ratings:</h2>
            <ul className="list-disc list-inside text-gray-800">
              {movieDetails.Ratings.map((rating, index) => (
                <li key={index}>
                  {rating.Source}: <span className="font-semibold">{rating.Value}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  </div>
</div>


  );
};

export default Movie;