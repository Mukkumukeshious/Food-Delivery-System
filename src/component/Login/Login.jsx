import React, { useState } from 'react'
import './Login.css'
import { assets } from '../../assets/Assets'

const Login = ({setShowLogin}) => {
    const [currState,setCurrState] =useState("Sign Up")
  return (
    <div className='login'>
        <form className='login-container'>
            <div className="login-title">
                <h2>{currState}</h2>
                <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
            </div>

                <div className="login-input">
                    {currState==="Sign Up"?
                    <input type="text" placeholder='Your name' required/>
                    :<></>
}
                    <input type="email" placeholder='Your Gmail' required/>
                    <input type="password" placeholder='Password' required />
                </div>
                <button>{currState==="Sign Up"?"Create account":"Login"}</button>
                <div className="login-condition">
                    <input type="checkbox" required />
                    <p>By Continuing, i agree to terms and condition of your privacy and policy.</p>
                </div>
                <div className="login-sign-up">
                {currState==="Login"?
                <p>Create a new account? <span onClick={()=>setCurrState("Sign Up")} >Click here</span></p>
                :
                <p>Already have an accocnt <span onClick={()=>setCurrState("Login")} > Login</span></p>

                }
                </div>
              
                
            
        </form>
    </div>
  )
}

export default Login
