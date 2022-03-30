import React from 'react'

const Movie = ({ movie }) => {
  return (
        
    <div key={movie.id}>
        <h2>{movie.name}</h2>
        <p>{movie.price}</p>
    </div>
  )
}

export default Movie
