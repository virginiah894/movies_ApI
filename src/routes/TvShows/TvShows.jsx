import React from 'react'
import { Link } from 'react-router-dom'
import Tv from '../../components/tv/tv'
const TvShows = () => {
  return (
      <>
          <h1 style={{ textAlign: 'center', marginTop: '2rem' }}> Tv Shows  </h1>

          <div>
              <Tv/>
          </div>

      </>
  )
}

export default TvShows