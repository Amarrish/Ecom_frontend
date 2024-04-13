import React from 'react'
import products from '../../Assets/data'
import Items from '../items/Items'
import './populr.css'
const Popular = () => {
  return (
    <>
        <div className='popular-container'>
            <h1>Popular items womens</h1>
            <hr />
            <div className='popularitems'>
                {
                    products.map((item,indx)=>{
                        return <Items key={indx} id={item.id} img={item.img} name={item.name} newprice={item.newprice} oldprice={item.oldprice}/>
                    })
                }
            </div>
        </div>
    </>
  )
}

export default Popular