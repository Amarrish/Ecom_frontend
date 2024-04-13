import React from 'react'
import Hero from '../components/hero/Hero'
import Popular from '../components/Popular/Popular'
import Offer from '../components/Offers/Offer'
import Collection from '../components/Newcollections/Collection'
import Newsletter from '../components/Newsletter/Newsletter'

const Shop = () => {
  // console.log(collections);
  return (
    <div>
        <Hero/>
        <Popular/>
        <Offer/>
        <Collection/>
        <Newsletter/>        
    </div>
  )
}

export default Shop