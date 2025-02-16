import React, { useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/Assets'

const Navbar = () => {
  const [menu,setMenu] = useState("Home")
  return (
    <div>
      <div className="navbar">
        <img src={assets.logoK} alt="" className="logo" />
        <nav className="navbar-menu">
          <li onClick={()=>setMenu("Home")} className={menu==="Home"?"active":""}>Home</li>
          <li onClick={()=>setMenu("Menu")} className={menu==="Menu"?"active":""}>Menu </li>
          <li onClick={()=>setMenu("Mobile-App")} className={menu==="Mobile-App"?"active":""}>Mobile-App</li>
          <li onClick={()=>setMenu("Contact-Us")} className={menu==="Contact-Us"?"active":""}>Contact-Us</li>
          </nav>

          <div className="nav-right">
            <img src={assets.search_icon} alt="" />
            <div className="navbar-search-icon">
              <img src={assets.basket_icon} alt="" />
              <div className="dot"></div>
            </div>
            <button>SignIn</button>

          </div>
      </div>
      
    </div>
  )
}

export default Navbar
