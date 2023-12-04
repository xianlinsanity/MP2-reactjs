import React from 'react';
import logo from '../../logo.png'
import youtube from '../../youtube.svg'
import facebook from '../../facebook.svg'
import instagram from '../../instagram.svg'
import twitter from '../../twitter-x.svg'
import phone from '../../phone.svg'
import email from '../../e-mail.svg'
import map from '../../map.svg'
import { Link } from 'react-router-dom';

function Login() {
    const loginbtnclick = function(){
        const username = document.getElementById('username')
            const password = document.getElementById('password')
            fetch('http://localhost:3000/login', {
                method: 'post',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username: username.value,
                    password: password.value,
                })
            }).then(function(result){
                  return result.json()
              }).then(function(result){
                  console.log('result: ', result)
                  if(result.success){
                    document.getElementById("message").innerHTML = "Login Successful! Welcome!";
                    localStorage.setItem('token', result.token);
                    window.location.href= '/';
                } else {
                    document.getElementById("message").innerHTML = "Login Unsuccessful. Please check your credentials.";
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
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
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
          <a className="nav-link" aria-current="page">Pricing</a>
        </li>
        <li className="nav-item dropdown navdistance">
          <a className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          <Link to="/login">Members</Link>
          </a>
          <ul className="dropdown-menu">
          <li><a className="dropdown-item" aria-current="page">Login</a></li>
            <li><a className="dropdown-item"><Link to="/registration">Register</Link></a></li>
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
      <div className="container1">
      <br/>
        <br/>
        <h2 className='p2'>Member's Login</h2>
        <p className='p1'>Please fill out the information needed.</p>
        <br/>
        <div>
            <input type="text" id="username" placeholder="Username"/>
            <br/>
            <input type="password" id="password" placeholder="Password"/>
            <br/>
            <button id="login" onClick={loginbtnclick} className='btn btn-secondary btn-lg'>Login</button>
            <br/>
            <p id="message" className='p1'></p>
        </div>
        <br/>
        <p className='p1'>Not yet a member? Please click <Link to="/registration">here</Link> to register!</p>
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

export default Login;