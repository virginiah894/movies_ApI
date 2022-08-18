import './App.css';
import SearchIcon from './search.svg';
import MovieCard from './components/moviecard';

import { useEffect ,useState} from 'react';

const API_URL= 'http://www.omdbapi.com?apikey=13d25c74';
const movie1 = {
  Poster: "https://m.media-amazon.com/images/M/MV5BYjFhN2RjZTctMzA2Ni00NzE2LWJmYjMtNDAyYTllOTkyMmY3XkEyXkFqcGdeQXVyNTA0OTU0OTQ@._V1_SX300.jpg",
  Title: "Italian Spiderman",
  Type: "movie",
  Year: "2007",
  imdbID: "tt2705436"
}
const App=()=> {
  const [movies, setMovies]= useState([])
  const searchMovies =async(title)=> {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  }
  useEffect(()=>{
    searchMovies('spiderman');
    

  }, []);
  return(
    <div className="App">
    
       <h1>Movies haven</h1>
       <div className="search">
        <input
        placehlder = "search for movies"
        value="superman"
        onChange={()=>{}}/>
        <img
        src="{searchIcon}"
        alt ="Search"
        onClick={()=>{}}
        />
       </div>
       {movies?.length>0?
       (
       <div className='container'>
        {movies.map((movie)=>(
        <MovieCard movie={movie}/>))}
        
       </div>
       ):
       (
        <div className='empty'>
          <h2>No movies found</h2>
        </div>
       )
       }

      
      
      
  
    </div>

  )
    

  
  
}


export default App;
