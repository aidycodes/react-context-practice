import React, { useState, createContext } from 'react'


export const MovieContext = createContext()

export const MovieProvider = (props) => {

        const [ movies, setMovies ] = useState([
        {name:"movie1",price:7,id:444},{name:"movie2",price:5, id:555},{name:"movie3",price:10, id:666}
    ])

  return (
        <MovieContext.Provider value={[movies, setMovies]}>
                {props.children}
        </MovieContext.Provider>
  )
}

