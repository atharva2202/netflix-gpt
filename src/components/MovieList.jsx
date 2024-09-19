import React, { useRef } from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  const scrollRef = useRef(null);

  // Scroll the movie list to the left
  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  // Scroll the movie list to the right
  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  if (!movies || movies.length === 0) {
    return <div>No movies available</div>;
  }

  return (
    <div className="px-6 bg-black text-white">
      <h1 className="text-3xl py-4">{title}</h1>
      <div className="relative">
        {/* Left arrow button */}
        <button
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 p-2 z-10"
          onClick={scrollLeft}
        >
          ◀
        </button>
        {/* Movie list container */}
        <div
          className="flex overflow-x-hidden scroll-smooth scrollbar-hide"
          ref={scrollRef}
        >
          <div className="flex">
            {movies.map((movie) => (
              <MovieCard key={movie.id} posterPath={movie.poster_path} />
            ))}
          </div>
        </div>
        {/* Right arrow button */}
        <button
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 p-2 z-10"
          onClick={scrollRight}
        >
          ▶
        </button>
      </div>
    </div>
  );
};

export default MovieList;
