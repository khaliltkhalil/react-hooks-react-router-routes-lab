import React from "react";

function Actor({ actor }) {
  return (
    <div>
      <h2>Name: {actor.name}</h2>

      <p>Movies:</p>
      <ul>
        {actor.movies.map((movie, index) => (
          <li key={index}>{movie}</li>
        ))}
      </ul>
    </div>
  );
}

export default Actor;
