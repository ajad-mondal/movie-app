import React from "react";



const MovieContext = React.createContext({
    state : {},
    dispatch : ()=> {
        console.log("Please implement the function");
    }
});

export default MovieContext