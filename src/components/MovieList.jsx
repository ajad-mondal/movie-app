import React from "react";
import Movie from "./Movie";

export default function MovieList({ movies, setBanner }) {
  return (
    <div
      style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
    >
      {movies.map((movie) => (
        <Movie
          title={movie.title}
          overview={movie.overview}
          poster_path={movie.poster_path}
          vote_average={movie.vote_average}
          vote_count={movie.vote_count}
          setBanner = {setBanner}
        />
      ))}
    </div>
  );
}
