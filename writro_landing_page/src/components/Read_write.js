import React from 'react'
import {Link, useNavigate} from 'react-router-dom'

const Read_write = () => {

  const handleClick = () => {
    window.scroll(0,0);
  };
  return (
    
     <div className='read--write' >
        <section className='read--section'>
            <p className='writro'>Writro Writer</p>
            <p className='writeUp'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fermentum porttitor duis nec leo ac. Natoque et sapien quisque mauris tempor, sapien accumsan. Nibh metus scelerisque dolor rhoncus est amet auctor.</p>
            <Link to="/Login">            
            <button 
            onClick={handleClick}
            className='btn--read--write'> Let's Write <span>&#8594;</span> </button>
            </Link>
        </section>
        <section >
        <img 
        className='chart2' 
        src=".\img\Column chart 2.png" alt="column-chart" />
        <img 
        className='creditCard' 
        src=".\img\Credit card.png" alt="credit card" />
        <img 
        className='vector1' 
        src=".\img\Vector (1).png" alt="credit card" />
        <img 
        className='vector2' 
        src=".\img\Vector.png" alt="credit card" />
        </section>

    </div>  
    
  )
}

export default Read_write