import React from 'react'
import './breadcrums.css'

const Breadcrums = (props) => {
    const {product} = props;
    // console.log('props',props);
    if (!product) {
        // Handle the case where product is undefined
        return <div className='breadcrums'>Loading...</div>;
    }
  return (
    <div className='breadcrums'>
        HOME <i className="fa-solid fa-caret-right"></i> SHOP <i className="fa-solid fa-caret-right"></i>{product.category} <i className="fa-solid fa-caret-right"></i> {product.name} 
         
    </div>
  )
}

export default Breadcrums