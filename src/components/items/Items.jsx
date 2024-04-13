import React from 'react'
import './item.css'
import { Link } from 'react-router-dom'
const Items = (prop) => {
  return (
    <>
    <div className='item-container'>
        <div className="itemimg">
           <Link to={`/product/${prop.id}`}><img  src={prop.img} alt="img" /></Link> 
        </div>
        <div className="itemname">
            {prop.name}
        </div>
        <div className="itemprice">
            <div className='newprice'>$ {prop.newprice}</div>
            <div className='oldprice'>$ {prop.oldprice}</div>
        </div>

    </div>
    </>
  )
}

export default Items