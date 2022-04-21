import React, { useContext } from 'react'
import "./styles/movie.css";
import BannerContext from '../contexts/BannerContext';

export default function Movie({title, overview, poster_path, vote_average, vote_count}) {
  const { setBanner } = useContext(BannerContext);

  return (
    <div onClick={()=>setBanner(title, overview, poster_path, vote_average, vote_count)} className="movie-card">
        <figure>
            <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt="" />
            <figcaption>
                <h2>{title}</h2>
            </figcaption>
        </figure>
    </div>
  )
}
