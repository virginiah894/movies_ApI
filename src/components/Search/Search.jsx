import React from 'react'
import './search.css'
const Search = ({handleChange}) => {
  return (
    <div className='Search-box'>

<div>
              <input type="text" className='search'  placeholder='Search for a movie...' onChange={(e) => handleChange(e)}/>
             
</div>
         
    </div>
 
  )
}

export default Search