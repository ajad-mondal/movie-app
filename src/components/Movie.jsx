import React from 'react'
import "./styles/movie.css";

export default function Movie({title, overview, poster_path, vote_average, setBanner}) {


  return (
    <div onClick={()=>setBanner(title, overview, poster_path, vote_average)} className="movie-card">
        <figure>
            <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt="" />
            <figcaption>
                <h2>{title}</h2>
            </figcaption>
        </figure>
    </div>
  )
}
