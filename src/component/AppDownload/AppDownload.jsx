import React from 'react'
import './AppDownload.css'
import { assets } from '../../assets/Assets'

const AppDownload = () => {
  return (
    <div className='app-download' id='app-download'>
      <p>For Better Experience Download <br /> KhazaAayeu App</p>
      <div className="app-download-from">
        <img src={assets.play_store} alt="" />
        <img src={assets.app_store} alt="" />
      </div>
      
    </div>
  )
}

export default AppDownload
