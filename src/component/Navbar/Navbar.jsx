import React, { useContext, useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/Assets'
import { Link } from 'react-router-dom'
import { StoreContext } from '../../Context/StoreContext'

const Navbar = ({setShowLogin}) => {
  const [menu,setMenu] = useState("Home");
  const {getTotalCartAmount} = useContext(StoreContext);
  return (
    <div>
      <div className="navbar">
        <Link to='/'><img src={assets.logoK} alt="" className="logo" /></Link>
        <nav className="navbar-menu">
          <Link to='/' onClick={()=>setMenu("Home")} className={menu==="Home"?"active":""}>Home</Link>
          <a href='#explore-menu' onClick={()=>setMenu("Menu")} className={menu==="Menu"?"active":""}>Menu </a>
          <a href='#app-download' onClick={()=>setMenu("Mobile-App")} className={menu==="Mobile-App"?"active":""}>Mobile-App</a>
          <a href='#footer' onClick={()=>setMenu("Contact-Us")} className={menu==="Contact-Us"?"active":""}>Contact-Us</a>
          </nav>

          <div className="nav-right">
            <img src={assets.search_icon} alt="" />
            <div className="navbar-search-icon">
              <Link to='/cart'><img src={assets.basket_icon} alt="" /></Link> 
              <div className={getTotalCartAmount()===0?"":"dot"}></div>
            </div>
            <button onClick={()=>setShowLogin(true)}>SignIn</button>

          </div>
      </div>
      
    </div>
  )
}

export default Navbar
