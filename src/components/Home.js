import React from 'react'

function Home() {
  return (
    <div className='parent'>
        
    <div className='container-home'>
      <div className='content-home'>
        <div className='text-home'>
            <h3>SO, YOU WANT TO TRAVEL TO </h3>
            <h1>SPACE</h1>
            <p>Let's face it; if you want to go to space, you might as well genuinely go to outer space and not hover hind of on the edge of it. Well sit back, and relax because we'll give you a truly out of this world experience!</p>

        </div>
      
       <button className='explore' onMouseLeave={()=>document.getElementById('gradient').style.display = 'none'} onMouseOver={()=>document.getElementById('gradient').style.display = 'block'}>EXPLORE</button>
      </div>
    </div>
    </div>
  )
}

export default Home