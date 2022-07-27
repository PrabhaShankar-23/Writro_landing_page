import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { useState } from 'react';


const Login = () => {

const navigate = useNavigate();
const [logged, setLogged] = useState(false);
const [loginDetails, setLoginDetails] = useState({
  userEmail : null,
  password : null,
});

const handleClick = () => {
    setLogged(!logged);
    if(loginDetails.userEmail && loginDetails.password){
      // console.log('logged in');
      navigate('/publish');
    }
  }

  const handleDetails = (e) => {
   
    if(e.target.id ==='email'){
      setLoginDetails((loginDetails) => {
        return (
          { ...loginDetails,
             userEmail :e.target.value,
          }
        )
      })    
         
    }
    if(e.target.id ==='password'){
      setLoginDetails((loginDetails) => {
        return (
          { ...loginDetails,
             password :e.target.value,
          }
        )
      })    
         
    }
  //  console.log(loginDetails);
  }

  return (
    <div className='login'>
        <section className='login--logo--section'>       
            <p className='loginText'>Login</p>                  
            <section className='contact--logos'>
                <img className='imglogo google' src=".\img\google-sign-in.png" alt="google mail" />
                <img className='imglogo facebook' src=".\img\facebook-sign-in.png" alt="facebook" />
                <img className='imglogo twitter' src=".\img\twitter-sign-in.png" alt="twitter" />
            </section>
            <section className='grey'></section>
            <hr />
            <p className='email'>Email/Username</p>
            <input 
            type="email" 
            id="email" 
            placeholder='Enter your email or username'
            onChange={handleDetails}

            name="email"></input>
            <section className='grey'></section>

            <p className='email password'>Password</p>
            <input type="password" 
            id="password" 
            placeholder=' Enter your password'           
            name="password"
            onChange={handleDetails}
            ></input>
            <section className='grey'></section>

            <p className='forgot--password'>Forgot Password?</p>
            <button 
            onClick = {handleClick}
            className='btn--login'
            >LOGIN</button>
        </section>
        <section>

        <img className='pana' src=".\img\pana.png" alt="brooding writer" />

        </section>
    </div>
  )
}

export default Login