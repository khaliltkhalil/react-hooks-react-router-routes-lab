import React from "react";
import { movies } from "../data";
import Movie from "./Movie";

console.log(movies);
function Movies() {
  return (
    <div>
      <h1>Movies Page</h1>
      {movies.map((movie, index) => (
        <Movie key={index} movie={movie} />
      ))}
    </div>
  );
}

export default Movies;
