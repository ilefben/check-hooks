import React, { useState } from "react";
import MovieCard from "./MovieCard";
import MovieList from "./MovieList";
import Filter from "./Filter";
import Movies from "./Movies";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MovieDetails from "./MovieDetails";

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
    <Router>
      <div className="app">
        <Filter onFilter={handleFilter} />
        <MovieList movies={filteredMovies} />

        <Routes>
          <Route path="/" element={<MovieCard />} />
          <Route path="/MovieDetails" element={<MovieDetails />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
