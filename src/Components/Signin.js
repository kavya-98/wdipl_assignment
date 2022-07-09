import React, { useEffect, useState } from 'react'
import '../App.css';
import {Link} from 'react-router-dom';
import { useLocation } from 'react-router-dom';



export default function Signin() {
  // const { register, handleSubmit, formState: { errors } } = useForm();
  const location = useLocation()
  const { from } = location.state
  const [email,setemail]=useState("")
  const [Password,setPassword]=useState("")
  const [error,seterror]=useState("")
  //const []
  const submitHandler=(e)=>{
e.preventDefault();
    if(email===""||Password==="" ){
      seterror("all Fields required")
      
    }

  }
  
  return (
    <div id="signin" >
        <h1>Welcome back!</h1>
        <form id='sign'>
        <input placeholder='Email' onChange={(e)=>setemail(e.target.value)}></input>
        {(email=="")?<p>{error}</p>:<span></span>}
        <input placeholder='Password' onChange={(e)=>setPassword(e.target.value)}></input>

      
        
        <button type="submit" onSubmit={submitHandler}><Link className='link' to='/dashboard' state={{ from: {email}}}>
           signin
        </Link></button>
        </form> 
        <div>
        Don't have an accounts
        <Link className='link' to='/registration' >
          <span>Register Now</span>
        </Link>
        </div>
    </div>
  )
}
