import{Routes, Route} from 'react-router-dom'
import Home from './routes/Home/Home'
import Navigation from './routes/Navigation/Navigation'
import TvShows from './routes/TvShows/TvShows'
import Movies from './routes/Movies/Movies'
import Details from './routes/Details/Details'
const App = () => {

return(

  <div>
 <Routes>


{/* we have enclosed all our other routes in the Navigation route making it the parent component  */}
<Route path='/' element={<Navigation/>}>

{/* index ={true } will enable us access our home page  when we navigate to the base route of our app */}
        <Route index={true} element={<Home />} />
        <Route path='/tv' element={<TvShows/>}/>
        <Route path='/movies' element={<Movies />} />

        {/* dataId will enable us get the id of the movie or tv show enabling us to get the specific details  */}
        <Route path='/movie/:dataId' element={<Details />} />
        <Route path='/tv/:dataId' element={<Details />} />
       {/* <Route path='/movies/:dataId' element={<Details/>}/>
        <Route path='/tv/:dataId' element={<Details />} /> */}
       
</Route>


 </Routes>

 
  </div>
)

}


export default App