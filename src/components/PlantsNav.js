import React from 'react'
import { NavLink } from 'react-router-dom'
function PlantsNav() {
  return (
    <div className='planet-nav'>
    <NavLink className="planet-nav-item" to={"/destination/moon"} activeclassname="active">MOON</NavLink>
    <NavLink className="planet-nav-item" to={"/destination/mars"} activeclassname="active">MARS</NavLink>
    <NavLink className="planet-nav-item" to={'/destination/titan'} activeclassname="active">TITAN</NavLink>
    <NavLink className="planet-nav-item" to={'/destination/europa'} activeclassname="active">EUROPA</NavLink>
    
</div>
  )
}

export default PlantsNav