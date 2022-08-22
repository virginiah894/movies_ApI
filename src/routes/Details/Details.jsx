import React, {useState ,useEffect} from 'react'
import {Link, useParams, useLocation} from 'react-router-dom'
import ShowDetails from '../../components/ShowDetails/ShowDetails'
import axios from 'axios'

const Details = () => {
  const apiKey = process.env.REACT_APP_MOVIES_API
  const [showMovieDetails , setShowMovieDetails] = useState([])

  const location= useLocation()

  //used the useParams hook to get the id of the movie or tv series attached to the end of the url we are fetching our data from
  const {dataId} = useParams()

  //used the useLocation hooke to get our current route
  const dataType = location.pathname.split("/:")[0]


  const dataIdValue = dataId.split(":")[1]
  useEffect(() => {
    const data = async () => {

      try {
        const response = await axios.get(`https://api.themoviedb.org/3/${dataType==="/tv" ?'tv': 'movie'}/${dataIdValue}?api_key=${apiKey}`);
        console.log(response.data)
        setShowMovieDetails(response.data)
      } catch (error) {
        console.log(error)
      }
    }
    data()
  }, [dataIdValue, dataType, apiKey])
  console.log(showMovieDetails)
  return (
    <>
      <div>
      <ShowDetails data={showMovieDetails}/>
      </div>
    </>
  )
}

export default Details