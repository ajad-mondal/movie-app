import React, { useContext } from 'react'
import "./styles/movie.css";
import MovieContext from '../contexts/MovieContext';

export default function Movie({title, overview, poster_path, vote_average, vote_count}) {
  const { setBanner } = useContext(MovieContext);

  
  
  return (
    <div onClick={()=>setBanner(title, overview, poster_path, vote_average, vote_count)} className="movie-card">
        <figure>
            <img src={`${poster_path}`} alt="" />
            <figcaption>
                <h2>{title}</h2>
                
            </figcaption>
        </figure>
    </div>
  )
}
