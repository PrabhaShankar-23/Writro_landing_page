import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { useState } from 'react';

const Hero = () => {
  return (
    <>
    <section className='header--section'>
    <section className='elipse'></section>

    <section className='headerSection'>

    <section className='publishing--reading' >

        <p className='hero--writeup' >
            <span> Want to publish your book? </span> <br />
            <span></span>
            <span>Write on the go with<span className='primary--color'>WRITRO</span>,</span>
        </p>
        <section className='btn--headers' >
      <Link to="/Login">
      
      <button className='btn--publishing--reading'> Start Publishing</button>
      </Link>
            
            <button className='btn--publishing--reading'> Start Reading</button>
        </section>
    </section>  
    <img className='elipse2'  src=".\img\Ellipse 2.png" alt="right circle" />
    </section>  
    <section className='hero--images' >
    <img className='speechBubble' src=".\img\speech-bubble.png" alt="speech bubble" />
    <img className='character' src=".\img\Character.png" alt="character" />
    </section>
    
     {/* <section className='elipse2'></section> */}
    </section>
    
    </>
  )
}

export default Hero