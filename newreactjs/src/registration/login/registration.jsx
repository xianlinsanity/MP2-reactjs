import React, { useState } from 'react';
import logo from '../../logo.png';
import youtube from '../../youtube.svg'
import facebook from '../../facebook.svg'
import instagram from '../../instagram.svg'
import twitter from '../../twitter-x.svg'
import phone from '../../phone.svg'
import email from '../../e-mail.svg'
import map from '../../map.svg'
import { Link } from 'react-router-dom';

function Registration() {
  
    const registerbtnclick = function(){
    const username = document.getElementById("username")
    const email = document.getElementById("email")
    const password = document.getElementById("password")
    const confirmPassword = document.getElementById("confirm-password")
    const messageElement = document.getElementById("message");
    
    if (password.value !== confirmPassword.value) {
      messageElement.innerHTML = "Password and confirm password do not match.";
      return false;

    fetch('http://localhost:3000/register', {
        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username: username.value,
            password: password.value,
            email: email.value,
      
        })
    }).then(function(result){
          return result.json()
      }).then(function(result){
          console.log('result: ', result)
          if(result.success){
                document.getElementById("message").innerHTML = "Registered Successfully!";
            } else {
                document.getElementById("message").innerHTML = "Sorry! Username already in used.";
            }
             // Prevent the form from submitting
             return false;
          })
    }
    const newlogo = <img src={logo} className="img-thumbnail logo1" alt='logo'></img>
    const youtubesvg = <img src={youtube} className="logo" alt='youtube'></img>
    const instagramsvg = <img src={instagram} className="logo" alt='instagram'></img>
    const facebooksvg = <img src={facebook} className="logo" alt='facebook'></img>
    const twittersvg = <img src={twitter} className="logo" alt='twitter'></img>
    const phonesvg = <img src={phone} className="logo2" alt='phone'></img>
    const emailsvg = <img src={email} className="logo2" alt='email'></img>
    const mapsvg = <img src={map} className="logo2" alt='map'></img>
return (
    <div>
    <div>
    <nav className="navbar navbar-expand-lg bg-dark border-bottom border-body" data-bs-theme="dark">
    <div className="container distance1">
      <a className="navbar-brand"><Link to="/home">{newlogo}</Link></a>
      <button className="navbar-toggler nav-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
      </button>
    <div className="collapse navbar-collapse navbg distance2" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item navdistance">
        <a className="nav-link active"><Link to="/home">Home</Link></a>
        </li>
        <li className="nav-item navdistance">
        <a className="nav-link"><Link to="/about">About Us</Link></a>
        </li>
        <li className="nav-item navdistance">
          <a className="nav-link"><Link to="/shop">Shop Now</Link></a>
        </li>
        <li className="nav-item navdistance">
        <a className="nav-link"><Link to="/pricing">Pricing</Link></a>
        </li>
          <li className="nav-item dropdown navdistance">
          <a className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          <Link to="/login">Members</Link>
          </a>
          <ul className="dropdown-menu">
          <li><a className="dropdown-item"><Link to="/login">Login</Link></a></li>
          <li><a className="dropdown-item" aria-current="page">Register</a></li>
          </ul>
        </li>
      </ul>
         {/* social links */}
         <ul className="navbar-nav d-flex flex-row  distance2">
            <li className="nav-item">
            <a href="https://www.facebook.com">{facebooksvg}</a>
             </li>
            <li className="nav-item">
             <a href="https://www.twitter.com">{twittersvg}</a>
            </li>
           <li className="nav-item">
           <a href="https://www.youtube.com">{youtubesvg}</a>
            </li>
           <li className="nav-item">
           <a href="https://www.instagram.com">{instagramsvg} </a>
            </li>
        </ul>
    </div>
    </div>
    </nav>
      </div>
      <br />
      <br />
      <br />
      <br />
      <div className='container'>
                {newlogo}
                <br />
                <br />
                <h2 className='p1'>Registration Form</h2>
                <br />
                <p className='p1'>Please fill out the information to register!</p>
                <br />
                <div>
                    <label>
                     <p className='p1'>Username:</p>
                     <input type="text" id="username" placeholder="Username" />
                     <p className='p1'>E-mail Address:</p>
                     <input type="text" id="email" placeholder="Email Address" />
                     <p className='p1'>Password:</p>
                     <input type="password" id="password" placeholder="Password" />
                     <p className='p1'>Confirm Password:</p>
                     <input type="password" id="password" placeholder="Password" />
                     <button id="register" onClick={registerbtnclick} className='btn btn-secondary btn-lg'>Register</button>
                     <br />
                     <p id="message"></p>
                    </label>
                 </div>
                 <br />
                 <p className='p1'>Please click on <Link to="/login">Login</Link> if you are already registered.</p>

                </div>
      <footer className="footerbg border border-secondary">
       <br/>
       <div className="container text-center">
        <div className="row">
        <div className="col">
        {mapsvg} <p className="font2">123456 Juan Luna St. <br/> Cebu City, Philippines 6000</p> 
        </div>
        <div className="col">
        {phonesvg} <p className="font2"> +(63)945-134-6666 <br/> (012)345-6789</p> 
        </div>
        <div className="col">
        {emailsvg} <p className="font2">nopainnogain@gmail.com <br/>contactus@nopain.com</p> 
        </div>
       </div>
       <br/>
       </div>
       <p className="font2 p-3 mb-2 bg-black text-white">Copyright ©2023 All rights reserved | No Pain No Gain®</p>
       </footer> 
    </div>

      )
    }
  }
export default Registration;