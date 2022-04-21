import React, { useContext } from 'react'
import ReactDOM from 'react-dom';
import MovieContext from '../contexts/MovieContext';

export default function AddMovieForm() {

    const {dispatch} = useContext(MovieContext);

    const handleSubmit = (event)=> {
        event.preventDefault();
        console.log(event.target);
    }
  return (

    ReactDOM.createPortal(
    <div>
        <i onClick={()=>{dispatch({type:"SET_ADD_MOVIE"})}}>&#10060;</i>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='Movie Title'/>
            <textarea></textarea>
            <select id="">
                <option value="1">1</option>
                <option value="1">2</option>
                <option value="1">3</option>
                <option value="1">4</option>
                <option value="1">5</option>
                <option value="1">6</option>
                <option value="1">7</option>
                <option value="1">8</option>
                <option value="1">9</option>
                <option value="1">10</option>
            </select>
            <input type="text" placeholder='Image Path' />
            <button type="submit">Submit</button>
        </form>
    </div>,

    document.querySelector('#portal')

    )
  )
}
