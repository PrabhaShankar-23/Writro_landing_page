import React from 'react'

const Read = () => {
  return (
   <div className='reader' >
        <section className='read--images--section'>
          <img className='cloud' src=".\img\Cloud.png" alt="cloud" />
          <img className='whitePhone' src=".\img\White Phone.png" alt="white phone" />
          <img className='Pot'    src=".\img\Potted.png" alt="pot" />
        </section>

        <section className='read--description'>
          <p className='writro'>Writro Reader</p>
          <p className='writeUp' >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fermentum porttitor duis nec leo ac. Natoque et sapien quisque mauris tempor, sapien accumsan. Nibh metus scelerisque dolor rhoncus est amet auctor.</p>
         <button className='btn--read--write'> Let's Read <span>&#8594;</span> </button>


        </section>
    </div>
  )
}

export default Read