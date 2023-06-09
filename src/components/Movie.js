import React from "react";

function Movie({ movie }) {
  return (
    <div>
      <h2>Name: {movie.title}</h2>
      <p>Time: {movie.time}</p>
      <p>Generes:</p>
      <ul>
        {movie.genres.map((genre, index) => (
          <li key={index}>{genre}</li>
        ))}
      </ul>
    </div>
  );
}

export default Movie;
