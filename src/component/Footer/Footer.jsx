import React from 'react'
import './Footer.css'
import { assets } from '../../assets/Assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-left">
                <img src={assets.logoK} alt="" />
                <p>Food delivery has transformed the way people enjoy their favorite meals, offering
                     a fast and convenient alternative to traditional dining. With just a few taps on a 
                     smartphone or clicks on a website, customers can order food from restaurants, cloud kitchens,
                      and even grocery stores,
                      getting their meals delivered right to their doorstep.
               </p>
               <div className="footer-socialMedia-icon">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon}alt="" />
               </div>

            </div>
            <div className="footer-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>

            </div>
            <div className="footer-right">
                <h2>Join Us</h2>
                <ul>
                    <li>97798216409</li>
                    <li>khazaayeu@gmail.com</li>
                </ul>
            </div>
        </div>
        <hr />
        <p className='footer-copyright'>Copyright © 2025-Future, Khaza-Aayeu.com, Inc. or its affiliates</p>
      
    </div>
  )
}

export default Footer
