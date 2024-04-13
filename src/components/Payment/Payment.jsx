import React, { useContext, useState } from 'react'
import './Payment.css'
import { Shopcontext } from '../Context/Shopcontext';

const Payment = () => {
    const [paymentmethod,setPaymentmethod] = useState('card');
    const {getotalamount} = useContext(Shopcontext)
    const paymentselect =(e)=>{
        setPaymentmethod(e.target.value)
    }
    console.log("paymentmethod",paymentmethod);

    
  return (
    <div className='payment-container'>
        <form >
            <div className='inputlabel'>
            <label htmlFor='fname'>First Name :</label>
            <input type="text" id='fname' /><br />
            </div>

            <div className='inputlabel'>
            <label htmlFor='lname'>Last Name :</label>
            <input type="text" id='fname' /><br />
            </div>

            <div className='inputlabel'>
            <label htmlFor='fname'>Address :</label>
            <input type="text" id='lname' /><br />
            </div>

            <div className='inputlabel'>
            <label htmlFor='fname'>Pincode :</label>
            <input type="text" id='fname' /><br />
            </div>

            <div className='inputlabel'>
            <label htmlFor='fname'>Contact Number :</label>
            <input type="text" id='fname' /><br />
            </div>

            <div className='inputlabel'>
            <label htmlFor='paymentmethod'>Payment Method</label>
            
            <select id='paymentmethod' value={paymentmethod} onChange={paymentselect}>
                <option  value='card'>Card</option>
                <option  value='internet'>Internet Banking</option>
                <option  value='UPI'>UPI</option>
            </select>
            </div>
            {
                paymentmethod==='card' && (
                    <div className='card'>
                             <div className='inputlabel'>
                         <label htmlFor='cardNumber'>Card Number</label>
                        <input type="text" id='cardNumber' /><br />
                        </div>

                        <div className='inputlabel'>
                        <label htmlFor='expiry'>Expiry</label>
                        <input type="text" id='expiry' /><br />
                        </div>

                        <div className='inputlabel'>
                        <label htmlFor='cvv'>CVV</label>
                        <input type="text" id='cvv' /><br />
                        </div>
                    </div>
                )
            }
            {
                paymentmethod==='internet' && (
                    <div className='internet'>
                        <div className='inputlabel'>
                         <label htmlFor='bankName'>Bank Name</label>
                        <input type="text" id='bankName' /><br />
                        </div>

                        <div className='inputlabel'>
                        <label htmlFor='accountNumber'>Account Number</label>
                        <input type="text" id='accountNumber' /><br />
                        </div>

                        <div className='inputlabel'>
                        <label htmlFor='password'>Password</label>
                        <input type="password" id='password' /><br />
                        </div>
                    </div>
                )
            }

            {
                paymentmethod==='UPI' && (
                    <div className='upi'>
                        <div className='inputlabel'>
                         <label htmlFor='upiId'>UPI ID</label>
                        <input type="text" id='upiId' /><br />
                        </div>
                    </div>
                )
            }

            <button className='paybtn' type='submit'>Pay $ {getotalamount()}/-</button>
        </form>

    </div>
  )
}

export default Payment