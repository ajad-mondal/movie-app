import React, {useContext} from "react";
import MovieContext from "../contexts/MovieContext";
import Movie from "./Movie";

export default function MovieList({pageNo, moviesPerPage}) {

  const {state} = useContext(MovieContext);

  
  const movies = state.filterMovieList;

  const startingIndex = (pageNo-1)*moviesPerPage;
  const thisPageMovies = movies.slice(startingIndex, startingIndex + parseFloat(moviesPerPage));
  console.log(thisPageMovies, moviesPerPage, pageNo, startingIndex);

  return (
    <div
      style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
    >
      {thisPageMovies.map((movie) => (
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
