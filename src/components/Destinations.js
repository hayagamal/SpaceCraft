import React from 'react'
import PlantsNav from './PlantsNav'
function Planet({Object}) {
    const {planetimg, planetname, description, distance, time } = Object;
  return (
    <div className='parent'>
    <div className='destination-content'>
      
        <div className='planet'>
        <h1><span>01</span> PICK YOUR DESTINATION</h1>
        <img src={planetimg} alt="planetname"/>
        </div>
        <div className='planet-details'>
            <div className='planets-nav'>
            <PlantsNav/>
            </div>
            <div className='planet-info'>
                <h1>{planetname}</h1>
                <div>{description}</div>
            </div>
            
            <div className='planet-more-info'>
                <div className='distance'>
                    <p>AVG. DISTANCE</p>
                  <span>{distance}</span>
                    </div>
                <div className='time'>
                    <p>EST. TRAVEL TIME</p>
                    <span>{time}</span>
                    </div>
            </div>
        </div>
      </div>
      </div>
  )
}

export default Planet