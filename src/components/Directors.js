import React from "react";
import { directors } from "../data";
import Director from "./Director";

console.log(directors);
function Directors() {
  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map((director, index) => (
        <Director key={index} director={director} />
      ))}
    </div>
  );
}

export default Directors;
