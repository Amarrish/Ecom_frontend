import React from 'react'
import Items from '../items/Items'
import collections from '../../Assets/collection'
import './collection.css'
// console.log(collections);
const Collection = () => {
  return (
    <>
    <div className='collection-container'>
            <h1>New Collections</h1>
            <hr />
            <div className='collectionitems'>
                {
                    collections.map((item,indx)=>{
                        return <Items key={indx} id={item.id} img={item.img} name={item.name} newprice={item.newprice} oldprice={item.oldprice}/>
                    })
                }
            </div>
        </div>
</>
  )
}

export default Collection