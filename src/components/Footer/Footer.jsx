import React from 'react'
import './Footer.css'
import logo from '../../Assets/shopping-cart.png'
const Footer = () => {
  return (
    <div className='footer-container'>

      <div className="shopper">
        <img src={logo} alt="img" />
        <h4>SHOPPER</h4>
      </div>

      <div className="details">
        <ul className='complist'>
          <li>Company</li>
          <li>Products</li>
          <li>Office</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>

      <div className="icons">
        <p>insta</p>
        <p>thread</p>
        <p>whatsapp</p>
      </div>

      <hr />
      <div className="footer">
        <p>Copyright @ 2023-All Right Reserved</p>
      </div>
    </div>
  )
}

export default Footer