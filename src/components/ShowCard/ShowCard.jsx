import React from 'react'
import  classes from './ShowCard.module.css'
import { Link } from 'react-router-dom'
const ShowCard = ({ data }) => {
    return (

        <>
        {data.media_type === 'tv' ? (
        <Link to={`/tv/:${data.id}`}>

            <div className={classes.showCard}>
                <img className={classes.showImage} src={`https://image.tmdb.org/t/p/original/${data.poster_path}`} alt={data.title} />

                <div className={classes.showDetails}>

                    <h3>
                        Name :{data.title || data.name}
                    </h3>

                    <h3>
                        Release Date: {data.release_date}
                    </h3>

                    <h3>
                        Media type :{data.media_type}
                    </h3>
                    <h3>
                        Rating: {data.vote_average}
                    </h3>

                </div>
            </div>
        </Link>
        ) : (
                <Link to = {`/movie/:${data.id}`} >

        <div className={classes.showCard}>
            <img className={classes.showImage} src={`https://image.tmdb.org/t/p/original/${data.poster_path}`} alt={data.title} />

            <div className={classes.showDetails}>

                <h3>
                    Name :{data.title || data.name}
                </h3>

                <h3>
                    Release Date: {data.release_date}
                </h3>

                <h3>
                    Media type :{data.media_type}
                </h3>
                <h3>
                    Rating: {data.vote_average}
                </h3>

            </div>
        </div>
        </Link >
        )}
        </>
    )
}

export default ShowCard