import React, { useState } from "react";
import MovieList from "./MovieList";
import Filter from "./Filter";
import Movies from "./Movies"; 

const App = () => {
  const [movies] = useState(Movies);
  const [filteredMovies, setFilteredMovies] = useState([...movies]);

  const handleFilter = ({ title, rate }) => {
    const filtered = movies.filter((movie) => {
      const titleMatch = movie.title
        .toLowerCase()
        .includes(title.toLowerCase());
      const rateMatch = movie.rating.toString().includes(rate);

      return titleMatch && rateMatch;
    });

    setFilteredMovies(filtered);
  };
  return (
    <div className="app">
      <Filter onFilter={handleFilter} />
      <MovieList movies={filteredMovies} />
    </div>
  );
};

export default App;

