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
            <p className='rating'><i class="fa-solid fa-star"></i> {featuredMovie.vote_average}</p>
            <p className='type'>{featuredMovie.vote_count}+ votes</p>
            <p>{featuredMovie.overview}</p>
            </div>


        </figcaption>
      </figure>
      
    </section>
  )
}
