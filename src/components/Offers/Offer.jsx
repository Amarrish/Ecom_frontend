import React from 'react'
import offerpic from '../../Assets/lovepik-removebg-preview.png'
import './Offer.css'
const Offer = () => {
  return (
    <>
    <div className="offer-container">
        <div className="leftoffer">
            <h2>Exclusive Offer</h2>
            <h2>Offers for you</h2>
            <p>ONLY ON BEST SELLERS PRODUCT </p>
            <button>Check now</button>
        </div>


        <div className="rightoffer">
            <img src={offerpic} alt="offerimg" />
        </div>
    </div>
    </>
  )
}

export default Offer