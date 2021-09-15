import React, { useContext } from "react";

import { MovieContext } from "./MovieContext";

const Nav = () => {
    const [movies, setMovies] = useContext(MovieContext);

  return (
    <React.Fragment>
      <h3>Cláudio Dantas</h3>
      <p>List of Movies: {movies.length}</p>
    </React.Fragment>
  );
};

export default Nav;
