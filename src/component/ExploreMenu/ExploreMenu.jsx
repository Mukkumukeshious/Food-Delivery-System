import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/Assets'

const ExploreMenu = ({category,setCategory}) => {
  return (
    <div className='explore' id ='explore-menu'>
        <h2>Explore Our Manu</h2>
        <p className='explore-menu-text'> You can choose multiple item from our menu list </p>
        <div className="explore-menu-list">
            {menu_list.map((item,index)=>{
                return(
                    <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className="explore-menu-item">
                        <img className={category===item.menu_name?"active":""} src={item.menu_image} alt="" />
                        <p>{item.menu_name}</p>


                    </div>


                )
            })}
            <hr />

        </div>
      
    </div>
  )
}

export default ExploreMenu
