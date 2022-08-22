import React from 'react'
import { Link } from 'react-router-dom'
import Movie from '../../components/movies/movies.component'
const Movies = () => {
  return (
    <>
          <h1 style={{ textAlign: 'center', marginTop: '2rem' }}> Movies  </h1>

<div>
              <Movie />
</div>
     
    </>
  )
}

export default Movies