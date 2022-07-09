
import './App.css';
import Signin from './Components/Signin'; 
import Registration from './Components/Registration'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Thankyou from './Components/Thankyou';
import Dashboard from './Components/Dashboard';
// HERE FOR ROUTING WE HAVE TO DEFINE PATHS SO 
// THROUGH REACT-ROUTER WE CAN ROUTE AND GIVE THE PATH TO INDIVIDUAL COMPONENTS



function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route path="/" element={<Registration/>} />
        <Route path="/registration" element={<Registration/>}/>
        <Route path="/signin" element={<Signin/>}/>
        <Route path="/thanku" element={<Thankyou/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
      </Routes>
    </div>
  </Router>
  );
}

export default App;
