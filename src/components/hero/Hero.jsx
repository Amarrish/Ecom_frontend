import React from 'react'
import './hero.css'
import model from '../../Assets/model.png'

const Hero = () => {
  return (
    <>
    <div className="hero">
    <div className='left-section'>
        <p>New Arrivals</p>
        <div className='new-icons'>
            <p>New</p>
            <p><i className="fa-solid fa-wand-sparkles " style={{color:'#f3ec2b'}}></i></p>
        </div>
        <p>Collections</p>
        <p>For Everyone $ Mega Sale Here...</p>
        <button>Image Collection <i className="fa-solid fa-arrow-right fa-beat"></i></button>
    </div>

    <div className='right-section'>
        <img src={model} alt="heroimg" />
        
    </div>
    </div>
    </>
  )
}

export default Hero