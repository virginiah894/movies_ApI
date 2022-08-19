import React from 'react'
import './MovieCards.css'
const MovieCard = ({ data }) => {
    return (
        <div>

            <div className='movie-card'>
                <img className='movie-image' src={`https://image.tmdb.org/t/p/original/${data.poster_path}`} alt={data.title} />

                <div className='movie.card-details'>

                    <h3>
                        Title :{data.title}
                    </h3>

<h3>
                        Release Date: {data.release_date}
</h3>
                    <h3>
                       Rating: {data.vote_average}
                    </h3>
                   
                </div>
            </div>
        </div>
    )
}

export default MovieCard