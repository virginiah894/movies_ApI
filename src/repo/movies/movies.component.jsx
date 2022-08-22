import React, { useEffect,useState } from 'react'
import classes from './movies.styles.module.css'
import MovieCard from '../MovieCard/MovieCard'
import Search from '../Search/Search'
import axios from 'axios'
const Movies = () => {

    const [movieData, setMovieData ] = useState([])
    const [searchText, setSearchText] = useState("")
  
    
    const apiKey = process.env.REACT_APP_MOVIES_API
    const data = async () => {

        try {
            const response = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}`);
            console.log(response.data)
            setMovieData(response.data.results)
        } catch (error) {
            console.log(error)
        }
    }
       useEffect(() => {

           data()
       },[])
      
 
    
    const SearchData = movieData?.filter((movies) => (movies.title.toLowerCase().includes(searchText.toLowerCase())))
 

    const searchMovies = (e) =>(setSearchText(e.target.value)) 

  return (
    <div>

<Search handleChange={searchMovies}/>
          <div className={classes.movieContainer}>

              {
                  SearchData.map((movie) => <MovieCard key={movie.id} data={movie} />)
              }
          </div>
    </div>
    
  )
}

export default Movies