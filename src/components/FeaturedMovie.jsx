import React from 'react'
import "./styles/featuredMovie.css";

export default function FeaturedMovie({featuredMovie}) {
  return (
    <section style={{background : "url(`https://image.tmdb.org/t/p/w500${featuredMovie.poster_path}`)"}}>
      <figure>
        <img src={`https://image.tmdb.org/t/p/w500${featuredMovie.poster_path}`} alt="Movie banner" />
        <figcaption>
            <div>
            <h2>{featuredMovie.title}</h2>
            <p>{featuredMovie.overview}</p>
            </div>


        </figcaption>
      </figure>
      
    </section>
  )
}
