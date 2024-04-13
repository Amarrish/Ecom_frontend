import React from 'react'
import './CSS/reg.css'
import { Link } from 'react-router-dom'
const Loginsignup = ({register}) => {
  const registerform = register?true:false
  return (
    <div className='reg-container'>
      <div className="regform">
       <h3>{registerform?'Sign up':'SignIn'}</h3>
       <div className="inputs">
       <input className='input' type="email" placeholder='Enter your userId' />
       {registerform? <input className='input' type="text" placeholder='Enter your Username' />:null}
       
        <input className='input' type="password" placeholder='Enter your Password'/>

        {registerform?<button>SignUp</button>:<button>SignIn</button>}
       </div>

      {registerform? <p>If you already registered please <Link to={'/signin'} style={{textDecoration:'none'}}><span>LogIn</span></Link> here...</p>: <p>If you are not registered please <Link to={'/signup'} style={{textDecoration:'none'}}><span>SignUp</span></Link> here...</p>}
      </div>
    
    </div>
  )
}

export default Loginsignup