import React from 'react'
import { NavLink } from 'react-router-dom'
import {BiMenu} from 'react-icons/bi'
function Navbar() {
  const sideBar =()=>{
    const x = document.getElementById("navbar-reg");
    if(x.className === "nav"){
      x.className += " responsive";
    }else {
      x.className = "nav";
    }
  }
  return (
    <div className='navbar'>
        <div className='icon'>
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48"><g fill="none" fill-rule="evenodd"><circle cx="24" cy="24" r="24" fill="#FFF"/><path fill="#0B0D17" d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"/></g></svg>
        </div>
        <div className='line'>
            <hr/>
        </div>
        <div id="navbar-reg" className='nav responsive'>
            <ul>
            <NavLink className="mobile" id="mobile-nav" activeclassname="active" onClick={()=> sideBar()}><BiMenu/></NavLink>
                <NavLink className="navs" activeclassname="active" to={"/"}><span>00</span> HOME</NavLink>
                <NavLink className="navs" activeclassname="active" to={"/destination"}><span>01</span> DESTINATION</NavLink>
                <NavLink className="navs" activeclassname="active" to={"/crew"}><span>02</span> CREW</NavLink>
                <NavLink className="navs" activeclassname="active" to={"/tech"}><span>03</span> TECHNOLOGY</NavLink>
                
            </ul>
        </div>

    </div>
  )
}

export default Navbar