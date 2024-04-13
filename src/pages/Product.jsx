import React, { useContext } from 'react'
import { Shopcontext } from '../components/Context/Shopcontext'
import { useParams } from 'react-router-dom'
import Breadcrums from '../components/Breadcrums/Breadcrums'
import Productdisplay from '../components/Productdisplay/Productdisplay'
import Description from '../components/description/Description'
import Relatedproduct from '../components/relatedproduct/Relatedproduct'


const Product = () => {
  const {contextvalue} = useContext(Shopcontext)
  const {productId} = useParams();
  const product = contextvalue.find((e)=> e.id===Number(productId))
//  console.log('product.category',product.category);
  return (
    <div>
      <Breadcrums product={product}/>
      <Productdisplay product={product}/>
      <Description/>
      <Relatedproduct product = {product}/>
    </div>
  )
}

export default Product