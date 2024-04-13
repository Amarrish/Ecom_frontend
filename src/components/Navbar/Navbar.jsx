import React, { useContext, useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { Shopcontext } from '../Context/Shopcontext'
const Navbar = () => {
    const [menu,setMenu] = useState('shop')
    const {totalcartitems} = useContext(Shopcontext)
  return (
    <>
        <div className='navbar-container'>
        <div className='nav-logos'>
        
        <Link to={'/'} style={{ textDecoration: 'none' }}><img src="https://cdn-icons-png.flaticon.com/128/1170/1170678.png" alt="Logoimg" /></Link>
                <Link to={'/'} style={{ textDecoration: 'none' }}> <h4>Shopify</h4></Link>
            </div>

            <div className='list-container'>
                <ul className='list-items'>
                    <li onClick={()=>setMenu('shop')} className='list-element'><Link to={'/'} style={{ textDecoration: 'none' }}>Shop {menu==='shop'?<hr />:<></>}</Link></li>
                    <li onClick={()=>setMenu('men')} className='list-element'> <Link to={'/men'} style={{ textDecoration: 'none' }}>Men {menu==='men'?<hr />:<></>}</Link></li>
                    <li onClick={()=>setMenu('women')} className='list-element'><Link to={'/women'} style={{ textDecoration: 'none' }}>Women {menu==='women'?<hr />:<></>}</Link></li>
                    <li onClick={()=>setMenu('kids')} className='list-element'><Link to={'/kids'} style={{ textDecoration: 'none' }}>Kids {menu==='kids'?<hr />:<></>}</Link></li>
                </ul>
            </div>

            <div className='logbtns'>
            <Link to={'/signup'}> <button>Login</button></Link>
                <div className='cart'>
                <Link to={'/cart'}> <button className='cartbtn'><i className="fa-solid fa-cart-shopping"></i></button> </Link>
                <p>{totalcartitems()}</p> 
                </div>
                
            </div>
        </div>
    </>
  )
}

export default Navbar