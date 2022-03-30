import React, {useState, useContext, useEffect} from 'react'
import { MovieContext } from './MovieContext'

const AddMovie = () => {

    const [movies, setMovies] = useContext(MovieContext)

    const [ newMovie, setNewMovie] = useState({name:'',price:'', id:''})

    useEffect(() => {
        if(newMovie.id == ''){
        setNewMovie({...newMovie, id: Math.floor(Math.random() * 1346)})
        }
    },[newMovie])

    const handleChange = (e) => {
        const { name, value } = e.target
        setNewMovie({...newMovie, [name]:value})     
    }

    const handleSubmit = (e) => {
         e.preventDefault()
        if(newMovie.name !== '' && newMovie.price !== ''){

        setMovies([...movies, newMovie])
        setNewMovie({name:'',price:'',id:''})
        }
    }
 console.log(newMovie)
 console.log(movies)
  return (
    <form className="newMovie">
        <input onChange={handleChange} value={newMovie.name} type="text" placeholder='name' name="name"/>
        <input onChange={handleChange} value={newMovie.price} type="text" placeholder='price' name="price"/>
        <button onClick={(e) => handleSubmit(e)}> Submit</button>
    </form>
  )
}

export default AddMovie