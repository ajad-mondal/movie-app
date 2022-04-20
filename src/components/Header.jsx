import React from 'react'
import './styles/header.css';

export default function Header({filterMovies, sortMovies}) {
    const handleChange = (event)=> {
        console.log(event.target.value);
        filterMovies(event.target.value);
    }
  return (

    <header>
        <h1>Movies</h1>
        <ul>
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
