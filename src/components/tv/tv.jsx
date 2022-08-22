import React, { useEffect, useState } from 'react'
import classes from './tv.module.css'
import ShowCard from '../ShowCard/ShowCard'
import Search from '../Search/Search'
import axios from 'axios'
const Tv = () => {

    const [tvData, setTvData] = useState([])
    const [searchText, setSearchText] = useState("")


    const apiKey = process.env.REACT_APP_MOVIES_API

    useEffect(() => {
        const data = async () => {

            try {
                const response = await axios.get(`https://api.themoviedb.org/3/trending/tv/week?api_key=${apiKey}`);
                console.log(response.data)
                setTvData(response.data.results)
            } catch (error) {
                console.log(error)
            }
        }
        data()
    }, [apiKey])

    console.log(tvData)


    const SearchData = tvData?.filter((tv) => (tv.name?.toLowerCase().includes(searchText.toLowerCase())))


    const searchTv = (e) => (setSearchText(e.target.value))

    return (
        <div>

            <Search handleChange={searchTv} />
            <div className={classes.tvContainer}>

                {
                    SearchData.map((tv) => <ShowCard key={tv.id} data={tv} />)
                }
            </div>
        </div>

    )
}

export default Tv