import React, { useContext } from 'react'
import Movie from './Movie'
import { MovieContext } from './MovieContext'

const MovieList = () => {

const [movies] = useContext(MovieContext)

  return (
<>

    {movies.map((movie => (
    <Movie key={movie.id} movie={movie}/>
    )))}

  </>  
  )
}

export default MovieList