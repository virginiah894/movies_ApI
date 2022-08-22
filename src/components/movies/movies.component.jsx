import React, { useEffect,useState } from 'react'
import classes from './movies.styles.module.css'
import ShowCard from '../ShowCard/ShowCard'
import Search from '../Search/Search'
import axios from 'axios'
const Movie = () => {

    const [movieData, setMovieData ] = useState([])
    const [searchText, setSearchText] = useState("")
  
    
    const apiKey = process.env.REACT_APP_MOVIES_API
    
       useEffect(() => {
           const data = async () => {

               try {
                //using axios to fetch data from the api
                   const response = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}`);
                   console.log(response.data)
                   setMovieData(response.data.results)
               } catch (error) {
                   console.log(error)
               }
           }
           data()
       },[apiKey])
      
 
    
    const SearchData = movieData?.filter((movies) => (movies.title.toLowerCase().includes(searchText.toLowerCase())))
 

    const searchMovies = (e) =>(setSearchText(e.target.value)) 

  return (
    <div>

<Search handleChange={searchMovies}/>
          <div className={classes.movieContainer}>

              {
                  SearchData.map((movie) => <ShowCard key={movie.id} data={movie} />)
              }
          </div>
    </div>
    
  )
}

export default Movie