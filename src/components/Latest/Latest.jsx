import React, { useEffect, useState } from 'react'
import classes from './Latest.module.css'
import ShowCard from '../ShowCard/ShowCard'
import Search from '../Search/Search'
import axios from 'axios'
const Latest= () => {

    const [allTrending , setAllTrending] = useState([])
    const [searchText, setSearchText] = useState("")



    //this enables us to get our environment variables  form our .env
    const apiKey = process.env.REACT_APP_MOVIES_API

    useEffect(() => {
        const data = async () => {

            try {

                //using axios to fetch data from the api
                const response = await axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${apiKey}`);
                console.log(response.data)
                setAllTrending(response.data.results)
            } catch (error) {
                console.log(error)
            }
        }
        data()
    }, [apiKey])


    console.log(allTrending)

    const SearchData = allTrending?.filter((trending) => (trending.title?.toLowerCase().includes(searchText.toLowerCase())))


    const searchTrending = (e) => (setSearchText(e.target.value))

    return (
        <div>

            <Search handleChange={searchTrending} />
            <div className={classes.latestContainer}>

                {
                    SearchData.map((trending) => <ShowCard key={trending.id} data={trending} />)
                }
            </div>
        </div>

    )
}

export default Latest