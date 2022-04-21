import React,{useContext} from 'react'
import MovieContext from '../contexts/MovieContext';
import './styles/header.css';

export default function Header({filterMovies, sortMovies, setMoviesPerPage}) {
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
                <label htmlFor="">Movies Per Page: </label>
                <input min={1} max={10} defaultValue={5} type="number" onChange={(event)=>setMoviesPerPage(event.target.value)}/>
            </li>
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
