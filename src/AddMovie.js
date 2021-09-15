import React, { useState, useContext } from "react";

import { MovieContext } from "./MovieContext";

const AddMovie = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [movies, setMovies] = useContext(MovieContext);

  const updateName = (event) => {
    setName(event.target.value);
  };

  const updatPrice = (event) => {
    setPrice(event.target.value);
  };

  const addMovie = (event) => {
    event.preventDefault();
    setMovies((prevMovies) => {
      return [...prevMovies, { name: name, price: price }];
    });
  };

  return (
    <form onSubmit={addMovie}>
      <input onChange={updateName} value={name} type="text" name="name" />
      <input onChange={updatPrice} value={price} type="text" name="price" />
      <button type="submit">Submit</button>
    </form>
  );
};

export default AddMovie;
