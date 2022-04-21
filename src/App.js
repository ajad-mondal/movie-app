import './App.css';
import Header from './components/Header';
import FeaturedMovie from './components/FeaturedMovie';
import MovieList from './components/MovieList';

import {useEffect, useState} from "react";

function App() {

  const URL = "https://api.themoviedb.org/3/movie/popular?api_key=5737b7855c47021346977222e0f67768&language=en-US";

  const [movies, setMovies] = useState([]);
  const [filteredmovieList, setfilteredmovieList] = useState([]);
  const [featuredMovie, setFeaturedMovie] = useState({});

  const filterMovies = (keywords)=> {
    const filteredmovieList = movies.filter((movie)=> movie.title.toLowerCase().includes(keywords.toLowerCase()));
    console.log(filteredmovieList);
    setfilteredmovieList(filteredmovieList);

    const currentMovie = filteredmovieList[parseInt(Math.random()*filteredmovieList.length)]
    setBanner(currentMovie.title, currentMovie.overview, currentMovie.poster_path, currentMovie.vote_average, currentMovie.vote_count);

  }
  const sortMovies = (ascending = true, tobeFiltered = [...filteredmovieList])=> {
    // const tobeFiltered = [...filteredmovieList];
     if(ascending)
        tobeFiltered.sort((movie1, movie2)=> movie1.title.toLowerCase().localeCompare(movie2.title.toLowerCase())) 
     else   
        tobeFiltered.sort((movie1, movie2)=> movie2.title.toLowerCase().localeCompare(movie1.title.toLowerCase()))
     
    setfilteredmovieList([...tobeFiltered]);
    
    const currentMovie = tobeFiltered[parseInt(Math.random()*tobeFiltered.length)]
    setBanner(currentMovie.title, currentMovie.overview, currentMovie.poster_path, currentMovie.vote_average, currentMovie.vote_count);
  }

  const setBanner= (title, overview, poster_path, vote_average, vote_count=0)=> {
    setFeaturedMovie({
      title,
      overview,
      poster_path,
      vote_average,
      vote_count
    });
  }

  useEffect(()=> {
      fetch(URL).then((response)=> response.json())
      .then((data)=>data.results)
      .then((results)=> {
        console.log(results);
        const moviesList = results.map((movie)=> Object({
          title  : movie.title,
          overview : movie.overview,
          poster_path : movie.poster_path,
          vote_average : movie.vote_average,
          vote_count: movie.vote_count
        }))

        sortMovies(true, moviesList);
        setMovies( 
            moviesList
            );
      
        // setfilteredmovieList(
        //   moviesList
        // );
        
      })
      
    
  },[]);


  return (
  <>
    <Header filterMovies = {filterMovies} sortMovies={sortMovies}/>
    <FeaturedMovie featuredMovie = {featuredMovie}/>
    <MovieList movies = {filteredmovieList} style={{display : "flex"}} setBanner={setBanner}/>
  </>
  );
}

export default App;
