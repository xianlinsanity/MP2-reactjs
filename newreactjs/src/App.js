import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from './registration/login/login';
import Home from './components/Home/home';
import About from './components/About/about';
import Shop from './components/Shop/shop';
import Pricing from './components/Pricing/pricing';
import Registration from './registration/login/registration';


function App() {
  const userToken = localStorage.getItem('token');
  console.log('current userToken:', userToken)
  console.log('window.location:', window.location)
  if((window.location.pathname !== '/home' && window.location.pathname !== '/register')  && !userToken){
    window.location.href = 'home';
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route path="home" element={<Home/>}/>
        <Route path="login" element={<Login/>}/>
        <Route path="registration" element={<Registration/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="shop" element={<Shop/>}/>
        <Route path="pricing" element={<Pricing/>}/>
    {
        userToken ? //render if token is generated
        <Route path="/">
          <Route index element={<Home/>}/>
        </Route>
        : //else , no go
        ""
        }

      </Routes>
    </BrowserRouter>
  )
}

export default App;