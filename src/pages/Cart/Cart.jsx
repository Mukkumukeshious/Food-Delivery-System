import React, { useContext } from 'react'
import './Cart.css'
import { StoreContext } from '../../Context/StoreContext'
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const {cartItem,food_list,removeFromCart,getTotalCartAmount} = useContext(StoreContext);
  const nevigate = useNavigate();
  return (
    <div className='cart'>
      <div className="cart-item">
        <div className="cart-item-title">
          <p> Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {
          food_list.map((item,index)=>{
            if(cartItem[item._id]>0){
              return (
               <div>
                 <div className="cart-item-title cart-item-item"> 
                <img src={item.image} alt="" />   
                <p>{item.name}</p> 
                <p>${item.price}</p> 
                <p>{cartItem[item._id]}</p>
                <p>${item.price*cartItem[item._id]}</p>
                <p onClick={()=>removeFromCart(item._id)} className='cross'>x</p>
                </div>
                <hr />
               </div>
              )
            }
          })
        }

      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <div className="total">
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Dlivery Fee</p>
              <p>${getTotalCartAmount()==0?0:2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <p><b>${getTotalCartAmount()==0?0:getTotalCartAmount()+2}</b></p>
            </div>
            <button onClick={()=>nevigate("/order")}>PROCEED TO CHECKOUT</button>
          </div>
        
        </div>
        <div className="cart-promocode">
            <div>
              <p>If you have promo code, Applied it here</p>
              <div className='promo-cart-input'>
                <input type="text" placeholder='promo code' />
                <button>Submit</button>

              </div>
            </div>

          </div>
      </div>
      
    </div>
  )
}

export default Cart
