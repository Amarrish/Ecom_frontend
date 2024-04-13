import React from 'react'
import './Newsletter.css'
const Newsletter = () => {
  return (
    <>
    <div className='newsletter-container'>
        <h3>Get Exclusive offers on your Email</h3>
        <p>Subscribe to our newsletter and stay updated</p>
        <div className="emalsub">
          <input type="email" placeholder='email'/>
          <button>Subscribe</button>
        </div>
    </div>
    </>
    
  )
}

export default Newsletter