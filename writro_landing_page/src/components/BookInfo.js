import React from 'react'
import { useNavigate } from 'react-router-dom';

const BookInfo = () => {

    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/back__cover")
    };
    const handleClickPublish = () => {
        navigate("/final__landing")
    };

  return (
    <div className='bookInfo--section'>
        <img className='BookInfo--cover' src=".\img\Passion Or Love Creative Cover Book1 2.png" alt="my first Love" />
        <section className='BookDetails'>
            <p className='bookInfo--bookTitle'>My First Love</p>
            <p className='writer-Name' >By Anamika Mishra</p>
            <section className='bookNumericals--section'>
                <section className='numerical--block'>
                    <span className='numerical--section'> Total Words:15000</span>
                    <span className='numerical--section'> Total Pages:200</span>
                </section>
            </section>
            <p className='writeUp--story'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu montes, faucibus ultrices suspendisse. Lacus enim porttitor luctus vitae leo bibendum habitant enim, eget. Placerat ipsum et pellentesque viverra cras. Sollicitudin sem mi dolor vivamus congue lorem. In dignissim turpis posuere a sed</p>

        </section>
        <section className='bookInfo--button--section'>
            <img src=".\img\book-lover.png" alt="writer logo" />
        <button className='btn--signUp' onClick={handleClickPublish} >CONTINUE TO PUBLISH</button>
             <p className='or'>or</p>
        <button className='btn--signUp btn--makeBackCover' onClick={handleClick}>MAKE A BACK COVER</button>
        </section>
    </div>
  )
}

export default BookInfo