import React,{useContext} from 'react'
import MovieContext from '../contexts/MovieContext';
import './styles/header.css';

export default function Header({filterMovies, sortMovies}) {
    const {dispatch} = useContext(MovieContext)
    const handleChange = (event)=> {
        console.log(event.target.value);
        filterMovies(event.target.value);
    }
  return (

    <header>
        <h1>Movies</h1>
        <ul>
            <li>
                <button onClick={()=>dispatch({type: "SET_ADD_MOVIE"})}>Add Movie</button>
            </li>
            <li>
                <button onClick={()=>sortMovies(true)}>A-Z</button>
            </li>
            <li>
                <button onClick={()=>sortMovies(false)}>Z-A</button>

            </li>
            <li>
                <input type="text" placeholder='Search...' onChange={handleChange}/>
            </li>
        </ul>
    </header>
  )
}
