import React, { useContext, useState } from 'react'
import './cartitem.css'
import { Shopcontext } from '../Context/Shopcontext';
import Payment from '../Payment/Payment';


const Cartitem = () => {
    const { contextvalue,cartitem,Removecart,addtocart,getotalamount } = useContext(Shopcontext);
    
    console.log('contextvalue',contextvalue);
    console.log('cartitem',cartitem);

    const [expand,setExpand] = useState(false)
      
  return (
    <>
    <div className="cart-container">
        <div className="table-container">
            {
                contextvalue.map((e)=>{
                    if(cartitem[e.id]>0){
        return <table className='table'>
                <tr>
                    <th>Products</th>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                    <th>Add/Remove</th>
                </tr>
                
                <tr>
                    <td><img src={e.img} alt="" /></td>
                    <td>{e.name}</td>
                    <td>{e.newprice}</td>
                    <td>{cartitem[e.id]}</td>
                    <td>{e.newprice*cartitem[e.id]}</td>
                    <td>
                    <i onClick={()=>{addtocart(e.id)}} className="fa-solid fa-plus addbtn"></i>
                        <i onClick={()=>{Removecart(e.id)}} className="fa-solid fa-minus remvbtn"></i>
                    </td>
                </tr>
                
            </table>
           
                    }
                    return null
                })
            }
            
         
        </div>

        <div className="infos">
            <div className='payment'>
                <div className="sub">
                    <p>Total</p>
                    <p>${getotalamount()}</p>
                </div>
                <hr />
                <div className="shipping">
                    <p>Shipping fee</p>
                    <p>free</p>
                </div>
                <hr />
                <div className="total">
                    <p>Total</p>
                    <p>${getotalamount()}</p>
                </div>

                <button onClick={()=>setExpand(!expand)}>Proceed To Checkout</button>
                {
                    expand?<Payment /> :null
                }
                
            </div>


            <div className='promo'>
                <p>If you have Promo Code Enter it here</p>
                <div className="code">
                    <input type="text" placeholder='Promo code *** ***'/>
                    <button>Submit</button>
                </div>
            </div>
        </div>
    </div>


    </>
  )
}

export default Cartitem