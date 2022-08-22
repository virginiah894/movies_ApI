import React, {useState ,useEffect} from 'react'
import {Link, useParams} from 'react-router-dom'
import ShowDetails from '../../components/ShowDetails/ShowDetails'
import axios from 'axios'

const Details = () => {
  const apiKey = process.env.REACT_APP_MOVIES_API
  const [showMovieDetails , setShowMovieDetails] = useState([])

  const {dataId} = useParams()

  const dataType = dataId.split(":")[0]
  const dataIdValue = dataId.split(":")[1]
  useEffect(() => {
    const data = async () => {

      try {
        const response = await axios.get(`https://api.themoviedb.org/3/${dataType==="movie" ?'movie': 'tv'}/${dataIdValue}?api_key=${apiKey}`);
        console.log(response.data)
        setShowMovieDetails(response.data.results)
      } catch (error) {
        console.log(error)
      }
    }
    data()
  })
  console.log(dataType)
  return (
    <>
      <div>
        {showMovieDetails?.map((movieDetails) => console.log(movieDetails))}
      </div>
    </>
  )
}

export default Details