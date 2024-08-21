// import React from 'react'
import './login.css'
import logo from '../../assets/logo.png'
import { useState } from 'react'
import{login,signup} from '../../fire/fireconf'
import netflix_spinner from '../../assets/netflix_spinner.gif';

const Login = () => {
  const [signState,setSighState]=useState("Sigh In");
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [loading,setLoading] = useState(false);

  const user_auth = async (event)=>{
       event.preventDefault();
       setLoading(true);
     if(signState==="Sigh In"){
      await login(email,password);
     }else{
      await signup(name,email,password);
     }
     setLoading(false);
  }
  return (
    loading?<div className="loginspinner">
          <img src={netflix_spinner} alt="" className='loding-spiner' />
    </div>:
    <div className='login'>
      <img src={logo} alt="" className="ligin-logo" />
      <div className="login-form">
        <h1>{signState}</h1>
        <form action="">
              {signState==="Sign Up"? <input type="text" placeholder='Your Name' value={name} onChange={(e)=>{
              setName(e.target.value)
              }} />:<></>}
              <input type="email" placeholder='Your Email'value={email} onChange={(e)=>{
                setEmail(e.target.value)
              }} />
              <input type="password" placeholder='Your Password' 
              value={password} onChange={(e)=>{
                setPassword( e.target.value) 
              }} />
          <button onClick={user_auth} type='submit'>{signState}</button>
           <div className="form-help">
            <div className="remember">
              <input type="checkbox" />
              <label htmlFor="">Remember Me</label>
            </div>
            <p>Need Help?</p>
           </div>
        </form>
        <div className="form-switch">
        {signState==="Sigh In"?<p>New To   Netflix? <span onClick={()=>{setSighState("Sign Up")}}>Sigh Up Now</span></p>:
            <p>Already Have account? <span onClick={()=>{setSighState("Sigh In")}}>Sign In Now</span></p>
        }
        </div>
      </div>
    </div>
  )
}

export default Login
