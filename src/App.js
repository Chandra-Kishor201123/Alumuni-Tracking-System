// import logo from './logo.svg';
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import './App.css';


// function App() {
//   return (
//     <>
//     <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/signup" element={<Signup />} />
          
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
   
//     </Routes>
//     </BrowserRouter>
//     </>
//   );
// }

// export default App;

// src/App.js
import React from 'react';
import Home from "./Home";
import Signup from './Signup';
import Login from './Login';
import Dashboard from './Dashboard';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
     
   
      <BrowserRouter>
        
        <div>

        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
       
   

    </Routes>
         
     </div>    
    
    </BrowserRouter>
    
  );
}

export default App;
