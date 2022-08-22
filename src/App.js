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


<Route path='/' element={<Navigation/>}>

        <Route index={true} element={<Home />} />
        <Route path='/tv' element={<TvShows/>}/>
        <Route path='/movies' element={<Movies />} />
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