import React from 'react'
import {Link, useNavigate} from 'react-router-dom'


const Cover = () => {
  return (
    <div>
        <section className='publish--cover'>
            <section className='backButton--Bookcover'>
              <section className='backbutton '>
              <img className='backButtonImage back--icon' 
                   src=".\img\bi_arrow-left-circle-fill.png" 
                   alt="backbutton Icon" 
              />
              <span className='text--backToAccount back--backtextCover'>Back</span>
            </section>
            </section>
            <section className='coverPage--images'>
              <p className='text--coverPage'>A Great Book Cover Leads to A Greater Audience</p>
                <section className='cover--images'>

                  <img src=".\img\Stay Fearless Creative Cover Book 1.png" alt="stayHappy" />
                  <img src=".\img\Passion Or Love Creative Cover Book 1.png" alt="passion of Love" />
                  <img src=".\img\Beige How About You Minimalist Cover Book 1.png" alt="how about you?" />

                </section>
                <p className='test--createYourOwn'>Create your own stylish cover with Canva</p>
                <section className='canva--section'>
                  <img src=".\img\Canva_Logo 1.png" alt="canvaIcon" />
                  <p className='text--createWithCanva'>Create with Canva</p>
                  <img src=".\img\blueArrowIcon.png" alt="blue arrow icon" />
                </section>

            </section>
        </section>
    </div>
  )
}

export default Cover