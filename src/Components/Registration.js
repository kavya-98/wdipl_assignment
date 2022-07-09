import React,{useState} from 'react'
import {Link} from 'react-router-dom';
import "../App.css"
export default function Registration(props) {
  const [Info,setInfo]=useState({
    name:"",
    email:"",
    number:"",
    gender:"",
    date:"",
    age:"",
    password:"",

  })
  console.log(Info.name)


  const [selectedCountry, setSelectedCountry] = useState();
  const [selectedState, setSelectedState] = useState();
  const [selectedCity, setSelectedCity] =useState();

  const data = {
    countries: [
      {
        name: "India",
        states: [
          { name: "E", cities: ["Delhi", "Kolkata", "Mumbai", "Bangalore"] }
        ]
      },
      {
        name: "Germany",
        states: [
          {
            name: "A",
            cities: ["Duesseldorf", "Leinfelden-Echterdingen", "Eschborn"]
          }
        ]
      },
      { name: "Spain", states: [{ name: "B", cities: ["Barcelona"] }] },
  
      { name: "USA", states: [{ name: "C", cities: ["Downers Grove"] }] },
      {
        name: "Mexico",
        states: [{ name: ["D", "F", "H"], cities: ["Puebla"] }]
      },
    ]
  };
  const availableState = data.countries.find((c) => c.name === selectedCountry);
  const availableCities = availableState?.states?.find(
    (s) => s.name === selectedState
  );
  return (
    <div id="container">
    <div>
    Already have Account  
    <Link  to='/signin'>
          <span>Login</span>
        </Link>
    </div>
    
        <h1>Register</h1>
        <form id='signup'>
        <input placeholder='Full Name' type="text" value={Info.name} onChange={(e) => setInfo({...Info, name: e.target.value})} ></input>
        <input placeholder='Email' type="email" value={Info.email} onChange={(e) => setInfo({...Info, email: e.target.value})}></input>
        <input placeholder='Phone Number' type="number" value={Info.number} onChange={(e) => setInfo({...Info, number: e.target.value})}></input>
        <input placeholder='Gender' type="text" value={Info.gender} onChange={(e) => setInfo({...Info, gender: e.target.value})}></input>
        <input placeholder='Date of Birth' type="Date" value={Info.date} onChange={(e) => setInfo({...Info, date: e.target.value})} ></input>
        <input placeholder='Phone Number' type="number" value={Info.age} onChange={(e) => setInfo({...Info, age: e.target.value})}></input>
        <input placeholder='Password' type="text" value={Info.password} onChange={(e) => setInfo({...Info, password: e.target.value})} ></input>
        <select
          placeholder="Country"
          value={selectedCountry}
          onChange={(e) => setSelectedCountry(e.target.value)}
        >
          <option>--Choose Country--</option>
          {data.countries.map((value, key) => {
            return (
              <option value={value.name} key={key}>
                {value.name}
              </option>
            );
          })}
        </select>
        <select
          placeholder="State"
          value={selectedState}
          onChange={(e) => setSelectedState(e.target.value)}
        >
          <option>--Choose State--</option>
          {availableState?.states.map((e, key) => {
            return (
              <option value={e.name} key={key}>
                {e.name}
              </option>
            );
          })}
        </select>
    
        <select placeholder="City" value={selectedCity}  onChange={(e) => setSelectedCity(e.target.value)}>
          <option>--Choose City--</option>
          {availableCities?.cities.map((e, key) => {
            return (
              <option value={e.name} key={key}>
                {e}
              </option>
            );
          })}
        </select>
        <div> <input type="checkbox" id='check'></input>
        <span>I agree to terms and condition </span></div>
       

        </form>
        
    <Link  to='/thanku' state={{ from: {Info} }}>
          <button>sign up</button>
        </Link>
        </div>
  )
}
