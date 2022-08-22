import React from 'react';


const MovieCard=({movie})=>{
    return (
        <div className="movie">
         
          <p>{movie.Year}</p>
          <div>
            <img src={movie.Poster} alt='Moviecard'/>
          </div>
          <div>
            <span>{movie.Type}</span>
          <p>{movie.Title}</p>
          </div>
        

        </div>

    )

}
export default MovieCard;

