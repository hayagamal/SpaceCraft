import {memo} from 'react'
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/Home';
import { Route, Routes } from 'react-router-dom';
import Destinations from './components/Destinations';
import {planets} from './data/planets'
function App() {
  return (
    <div className="App">
    
    <Navbar/>
     <Routes>
      <Route path={"/"} exact element={<Home/>}/>
      <Route path={"/destination"} exact element={<Destinations Object={planets.Moon}/>}/>
      <Route path={"/destination/moon"} element={<Destinations Object={planets.Moon}/>}/>
      <Route path={"/destination/mars"} element={<Destinations Object={planets.Mars}/>}/>
      <Route path={"/destination/titan"} element={<Destinations Object={planets.Titan}/>}/>
      <Route path={"/destination/europa"} element={<Destinations Object={planets.Europa}/>}/>
     </Routes>
    
    </div>

  );
}

export default memo(App);
