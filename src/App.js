import React from "react";
import "./App.css";

import Nav from "./Nav";
import MovieList from "./MovieList";
import AddMovie from "./AddMovie";
import { MovieProvider } from "./MovieContext";

function App() {
  return (
    <MovieProvider>
      <Nav />
      <MovieList />
      <AddMovie />
    </MovieProvider>
  );
}

export default App;
