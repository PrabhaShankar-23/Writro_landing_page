import React from 'react'

const FinalLanding = () => {
  return (
    <div>
        <section className='finalLanding--great--section'>
            <section className='backbutton'>
             <img className='backButtonImage' src=".\img\bi_arrow-left-circle-fill.png" alt="backbutton Icon" />
             <span className='text--backToAccount'>Back</span>
             </section>
            <p className='great'>Great!</p>
        </section>
        <section className='finalLanding--img--section'>
            <img className='finalLanding--img' src=".\img\talkergone.png" alt="E-Book" />
            <img src=".\img\book-lover-finalLanfing.png" alt="Physical Book" />
            <img src=".\img\weddingPlanner.png" alt="Expert" />
        </section>
        <section className='finalLanding--img--section'>
            <p className="bookName">E-Book</p>
            <p className="bookName">Physical Book</p>
            <p className="bookName">Expert</p>
        </section>

        <section className='finalLanding--img--section'>

        <section className='writeUp--story finalLandingTextDesc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</section>
        <section className='writeUp--story finalLandingTextDesc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</section>
        <section className='writeUp--story finalLandingTextDesc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</section>

        </section>
        <img className='finalLandingEllipse1' src=".\img\Ellipse 5.png" alt="right--ellipse" />
        <img 
        className='finalLandingEllipse2'
        
        // className='finalLandingEllipse1' 
        src=".\img\Ellipse 6.png" alt="left--ellipse" />
    </div>
  )
}

export default FinalLanding