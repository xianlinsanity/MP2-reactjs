import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Registration from './registration/login/registration';
import Login from './registration/login/login';
import Profile from './components/Home/Profile';

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