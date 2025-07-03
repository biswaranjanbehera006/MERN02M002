import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router';
import axios from "axios"

function Movies() {
  const api = import.meta.env.VITE_IMDB_API;
  const [moviesData, setMoviesData] = useState([]);
  const [search, setSearch] = useState("")

  const navigate=useNavigate();

  // console.log(moviesData);

  const getMovies = async (s = "all") => {
    try {

      const url=api+ "&s="+ s;  

      const result = await axios.get(url)

      if (result.data.Response === "True") {
        setMoviesData(result.data.Search)
      }

    }
    catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {

    getMovies();

  }, [])

  const handelSearch=()=>{
    getMovies(search)
  }

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-10">
  {/* Top Bar with Search and Buttons */}
  <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-6">
    
    {/* Back or Home Button */}
    <button
      onClick={() => navigate("/")}
      className="bg-blue-600 text-white px-5 py-2 rounded-lg shadow hover:bg-blue-700 transition-all"
    >
      ⬅ Home
    </button>

    {/* Search Input + Button */}
    <div className="flex items-center gap-2 w-full sm:w-auto">
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search movies..."
        className="w-full sm:w-64 px-4 py-2 border border-gray-300 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <button
        onClick={handelSearch}
        className="bg-blue-500 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-600 transition-all"
      >
        🔍 Search
      </button>
    </div>
  </div>

  {/* Movies Card Grid */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
    {moviesData?.length > 0 &&
      moviesData.map((ele) => (
        <div
          key={ele.imdbID}
          onClick={() => navigate(`/movie/${ele.imdbID}`)}
          className="bg-white rounded-xl shadow-md hover:shadow-xl cursor-pointer transition-all overflow-hidden"
        >
          <img
            src={ele.Poster !== "N/A" ? ele.Poster : "https://via.placeholder.com/300x450?text=No+Image"}
            alt={ele.Title}
            className="w-full h-80 object-cover"
          />
          <div className="p-4">
            <h2 className="text-lg font-semibold text-blue-900 mb-1">{ele.Title}</h2>
            <p className="text-sm text-gray-700">Year: {ele.Year}</p>
            <p className="text-sm text-gray-700">Type: {ele.Type}</p>
            <p className="text-xs text-gray-500">ID: {ele.imdbID}</p>
          </div>
        </div>
      ))}
  </div>
</div>

  )
}

export default Movies
