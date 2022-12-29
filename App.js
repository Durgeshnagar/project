import Navbar from './components/Navbar';
// import Footer from './components/Footer';
// import Login from './components/Login';
import Home from './components/Home';
// import About from './About';
import Login from './ABC';
// import Login from './components/Login';
// import Protected from './components/Protected';
import Services from './Services';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import React from "react";
import './App.css';
function App() {
    return (
         
        <BrowserRouter>
            <div>
            < Navbar />
               <div className='app'>
                <Routes>
              
                    <Route path="/" element={<Home/>} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/login" element={<Login />} />
                 
                </Routes>
                
               
                </div>
                </div>
                
               
   

          
        </BrowserRouter>


    );

}
export default App;