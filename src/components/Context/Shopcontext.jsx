import React, { createContext, useState } from "react";
import allproduct from "../../Assets/allproducts";
export const Shopcontext = createContext();
//function for cart
const getDefaultcart=()=>{
    let cart = {};
    for(let index=0;index<allproduct.length+1;index++){
        cart[index] = 0;
    }
    return cart;
   }

const Shopcontextshare = ({children}) =>{
//add cart
   const addtocart = (ItemId)=>{
    setCartitem((prev)=>({...prev,[ItemId]:prev[ItemId]+1}))
   }

//remove cart
   const Removecart = (ItemId)=>{
    setCartitem((prev)=>({...prev,[ItemId]:prev[ItemId]-1}))
   }
   
    const [cartitem,setCartitem] = useState(getDefaultcart());
    const [contextvalue,setContextvalue] = useState(allproduct);

    // get total amount 
    const getotalamount = ()=>{
        let totalamount = 0;
        for(let item in cartitem){
            if(cartitem[item]>0){
                let iteminfo = contextvalue.find((product)=>product.id===Number(item))
                totalamount = totalamount+iteminfo.newprice * cartitem[item]
            }
        }
        return totalamount
    }

    // number of cart items
    const totalcartitems = ()=>{
        let totalcart = 0;
        for(let item in cartitem){
            if(cartitem[item]>0){
                totalcart = totalcart + cartitem[item]
            }
        }
        return totalcart
    }

    return(
        <div>

            <Shopcontext.Provider value={{contextvalue,setContextvalue,addtocart,Removecart,cartitem,getotalamount,totalcartitems}}>
                {children}
            </Shopcontext.Provider>

        </div>
    )
}

export default Shopcontextshare