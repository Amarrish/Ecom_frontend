import React, { useContext } from 'react';
import './related.css';
import Items from '../items/Items';
import { Shopcontext } from '../Context/Shopcontext';


const Relatedproduct = (prop) => {
   const { product } = prop;
   const { contextvalue } = useContext(Shopcontext);



   return (
      <>
         <div className="relatedproduct">
            <h1>Related Products</h1>
            <div className="products">
            
               {contextvalue.map((item, indx) => {
                  if (product.category === item.category) {
                     return (
                   
                        <Items
                           key={indx}
                           id={item.id}
                           img={item.img}
                           name={item.name}
                           newprice={item.newprice}
                           oldprice={item.oldprice}
                           onClick={window.scrollTo(0,0)}
                        />
               
                     );
                  }
                  return null;
               })}
                
            </div>
         </div>
      </>
   );
};

export default Relatedproduct;
