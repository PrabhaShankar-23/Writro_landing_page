import React from 'react'

const Mobile = () => {
  return (
    <div className='mobile-section'>
        <img className='roseGold' src=".\img\Rose Gold.png" alt="mobile Image" />
        <section className='mobile--div'>
        <p className='writro--read'>Writro</p>
        </section>
        <section className='stores'>
            <section className='playStore'>
                <img className='playIcon' src=".\img\play Store.png" alt="playStoreIcon" />
                <p className='storeText'>Play Store</p>
            </section>
            <section className='appleStore'>
               <img className='appleIcon' src=".\img\Path.png" alt="playStoreIcon" />
               <p className='storeText' >Apple Store</p>
 
            </section>
        </section>
    </div>
  )
}

export default Mobile