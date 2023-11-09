import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Registration from './registration/registration';
import Login from './registration/login/login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="login" element={<Login/>}/>
        <Route path="registration" element={<Registration/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;