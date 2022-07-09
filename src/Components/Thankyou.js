import React from 'react'
import Signin from './Signin'
import {Link} from 'react-router-dom';
import thanks from './thanks.png';
import '../App.css'
import { useLocation } from 'react-router-dom'


export default function Thankyou() {
  const location = useLocation()
  const { from } = location.state
  return (
    <div id='thanku'>
    <img src={thanks}></img>
    <Link className='link' to='/signin' state={{ from: {from} }} >
          <button>Login</button>
        </Link>
    </div>
  )
}
