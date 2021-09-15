import React, { useState, useContext } from "react";

import Movie from "./Movie";
import { MovieContext } from "./MovieContext";

const MovieList = () => {
  const [movies, setMovies] = useContext(MovieContext);

  return (
    <React.Fragment>
      {movies.map((movie) => (
        <Movie key={movie.id} name={movie.name} price={movie.price} />
      ))}
    </React.Fragment>
  );
};

export default MovieList;
