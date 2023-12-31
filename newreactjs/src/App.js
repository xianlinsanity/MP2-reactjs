import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Registration from './registration/login/registration';
import Login from './registration/login/login';
import Profile from './components/Profile/Profile';
import Home from './components/Home/home';
import About from './components/About/about';
import Pricing from './components/Pricing/pricing';

function App() {
  const userToken = localStorage.getItem('token');
  console.log('current userToken:', userToken)
  console.log('window.location:', window.location)
  if((window.location.pathname !== '/login' && window.location.pathname !== '/register')  && !userToken){
    window.location.href = 'login';
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route path="login" element={<Login/>}/>
        <Route path="registration" element={<Registration/>}/>
        <Route path="home" element={<Home/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="pricing" element={<Pricing/>}/>
    {
        userToken ? //render if token is generated
        <Route path="/">
          <Route index element={<Profile/>}/>
        </Route>
        : //else , no go
        ""
        }

      </Routes>
    </BrowserRouter>
  )
}

export default App;