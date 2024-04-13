import React, { useContext } from 'react'
import { Shopcontext } from '../components/Context/Shopcontext'
import './CSS/Shopcategory.css'
import Items from '../components/items/Items'
const Shopcategory = (prop) => {
  const {contextvalue} = useContext(Shopcontext)
  // console.log(contextvalue);
  return (
    <>
    <div className='shopcategory-container'>
       
      <div className='banner'>
        <div className='lsection'>
          <h4>Get Flat 50% Offer</h4>
          <button>Book Now</button>
        </div>
        <div className='rsection'>
          <img src={prop.banner} alt="bannerimg" />
        </div>
      </div>


      <div className="sortindex">
        <div className="sortoption">
          <p>Showing 1-10 from 30 product</p>
          <button>Sort By <i className="fa-solid fa-circle-chevron-down"></i></button>
        </div>

<hr />
        <div className="cateproduct">
          <>
          {contextvalue.map((item,indx)=>{
            if(prop.category===item.category){
              return <Items  key={indx} id={item.id} img={item.img} name={item.name} newprice={item.newprice} oldprice={item.oldprice}/>
            }
            else{
             return null;
            }
          })}
          </>
        </div>
      </div>

          <div className="explorebtn">
            <button>Explore <i className="fa-solid fa-circle-chevron-down"></i> </button>
          </div>
    </div>
    </>
  )
}

export default Shopcategory