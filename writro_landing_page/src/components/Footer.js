import React from 'react'

const Footer = () => {
  return (
    <div className='footer--section'>
      <section className='footer--leftsection'>
        <img className='logo--img--footer' src=".\img\logo.png" alt="writer logo" />
        <section className='footer--section--content'>
          <p className='footer--writro'>Writro</p>
          <p className='footer--content'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Laoreet cras habitant magna urna, eget ut</p>
      </section>
      </section>
      <section className='footer--columns'> 
        <section className='footer--column'>
          <ul className='footer--column--heading'>Learn</ul>
          <ul className='footer--column--content'>FAQ</ul>
          <ul className='footer--column--content'>Community</ul>
          <ul className='footer--column--content'>Contact Us</ul>
          <ul className='footer--column--content'>Resources</ul>
        </section>
        <section className='footer--column'>
            <ul className='footer--column--heading'>Company</ul>
          <ul className='footer--column--content'>About Us</ul>
          <ul className='footer--column--content'>Terms & Conditions</ul>
          <ul className='footer--column--content'>Careers</ul>
          <ul className='footer--column--content'>Privacy Policy</ul>
        </section>
        <section className='footer--column'>
          <ul className='footer--column--heading'>Social</ul>
          <ul className='footer--column--content'>Facebook</ul>
          <ul className='footer--column--content'>Twitter</ul>
          <ul className='footer--column--content'>Instagram</ul>
        </section>
      </section>
    </div>
  )
}

export default Footer