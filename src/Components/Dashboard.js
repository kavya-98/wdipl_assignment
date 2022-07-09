import React from 'react'
import { useLocation } from 'react-router-dom'
import '../App.css'
import {Link} from 'react-router-dom';


export default function Dashboard() {
  const location = useLocation()
  const { from } = location.state
  return (
    
    <div>
    <div>
      <h1>welcome {}</h1>
      <Link className='link' to='/signin'>
          <p>log out</p>
        </Link>
    </div>
        <table>
        <tr>
          <td>"Email:"{from.email}</td> 
           <td>"Gender"</td>
          <td>"location:"</td>
        </tr>
        <tr>
          <td>"Phone No":</td>
          <td>"Country"</td>
          
        </tr>
        <tr>
          <td>"Age:"</td>
          <td>"State:"</td>
         
        </tr>
      </table>
    </div>
  )
}

