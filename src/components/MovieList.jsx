import React, {useContext} from "react";
import MovieContext from "../contexts/MovieContext";
import Movie from "./Movie";

export default function MovieList() {

  const {state} = useContext(MovieContext);
  console.log(state);

  return (
    <div
      style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
    >
      {state.filterMovieList.map((movie) => (
        <Movie
          title={movie.title}
          overview={movie.overview}
          poster_path={movie.poster_path}
          vote_average={movie.vote_average}
          vote_count={movie.vote_count}
        />
      ))}
    </div>
  );
}
