import React, { useContext } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../Context/StoreContext'

const PlaceOrder = () => {
  const {getTotalCartAmount}= useContext(StoreContext);
  return (
    <form className='place-order' action="">
      <div className="place-order-left">
        <p className='title'>Delivery Inforamtion</p>
        <div className="input-field">
          <input type="text" placeholder='First name'/>
          <input type="text" placeholder='Last name' />
        </div>
        <div className="input-field">
        <input type="text" placeholder='Email Address' />
        <input type="text" placeholder='Provance' />
        </div>
        
        <div className="input-field">
          <input type="text" placeholder='Area'/>
          <input type="text" placeholder='Conatact Number' />
        </div>
      </div>
      <div className="input-field-right">
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
            <button>PROCEED TO Payment</button>
          </div>
      </div>
      </div>

    </form>
  )
}

export default PlaceOrder
