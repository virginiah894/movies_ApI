import React from 'react'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import classes from './ShowDetails.module.css'
import{Link} from 'react-router-dom'
const ShowDetails = ({data}) => {

  //destructuring the values fromm the data object passed as props from the details page
   const{ title, name ,poster_path, popularity,homepage,  vote_average,  overview  } = data
  return (
  <>
  <div className={classes.pageContainer}>

      

      <h1 className={classes.title}>
        {title || name}
      </h1>

        <Link to='/' className={classes.backLink}> <AiOutlineArrowLeft />  back</Link>
  <div className={classes.container}>
      

        <div className={classes.image}>

          <img src={`https://image.tmdb.org/t/p/original/${poster_path}`} alt={title || name} className={classes.image} />
        </div>

        <div className={classes.details}>
          <h3>
            HomePage :  <Link to={`${homepage}`}> {homepage} </Link>
          </h3>

          <p className={classes.overviewText}>
            {overview}
          </p>


            <h3 className={classes.popularity}>
              Popularity: {popularity}
            </h3>
          <span>
            Rating: {vote_average}
          </span>
        </div>
  </div>
  
      </div>
   
  </>
  )
}

export default ShowDetails