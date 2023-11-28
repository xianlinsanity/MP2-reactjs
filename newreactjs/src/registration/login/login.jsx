import React from 'react';
import logo from '../../logo.png'
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
    const newlogo = <img src={logo} class="img-thumbnail logo" alt='logo'></img>
return (
    <div className='container'>
    <nav className="navbar navbar-expand-lg bg-dark border-bottom border-body" data-bs-theme="dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="I#"/><img src="pictures/logo.png" className="logo"/>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse distance2" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item navdistance">
              <a class="nav-link active" aria-current="page" href="index.html">Home</a>
            </li>
            <li class="nav-item navdistance">
              <a class="nav-link" href="about.html">About Us</a>
            </li>
            <li class="nav-item navdistance">
              <a class="nav-link" href="pricing.html">Pricing</a>
            </li>
            <li class="nav-item dropdown navdistance">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Members
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Login</a></li>
                <li><a class="dropdown-item" href="#">Register</a></li>
              </ul>
            </li>
          </ul>
        </div>
        <div class="collapse navbar-collapse distance1" id="navbarNavDropdown">
        <ol>
            <li>
            <p className="font1 distance">follow us:</p>
            </li>
            <li>
            <ul class="navbar-nav">
            <li class="nav-item">
            <a href="#"/><img src="svg/facebook.svg" alt="facebook logo" width="20" height="20" />
            </li>
            <li class="nav-item">
            <a href="#"/><img src="svg/twitter-x.svg" alt="twitter logo" width="20" height="20"/>
            </li>
            <li class="nav-item">
            <a href="#"/><img src="svg/youtube.svg" alt="youtube logo" width="20" height="20" />
            </li>
            <li class="nav-item">
              <a href="#"/><img src="svg/instagram.svg" alt="instagram logo" width="20" height="20" />
            </li>
            </ul>
            </li>
        </ol>
        </div>
        </div>
        </nav>
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
  )
}

export default Login;