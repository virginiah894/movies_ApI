import React from 'react'
import classes from './Navigation.module.css'

import { Link, Outlet } from 'react-router-dom'
const Navigation = () => {
  return (
   <>

<div className={classes.navigation}>
            <div className={classes.logo}>
               <Link to='/'>KMDB</Link>
              </div>

              <nav className={classes.menu}>
                  <Link to='/'>Home</Link>
                <Link to='/movies'>Movies</Link>

         <Link to='/tv'>TV SHOWS</Link>
              </nav>
</div>

{/* the outlet will enable us persist the navigation on all pages */}
<Outlet/>
   </>
  )
}

export default Navigation