import React from 'react';
import logo from '../logo.png'
import { Link } from 'react-router-dom';

function Registration() {
    const registerbtnclick = function(){
      const username = document.getElementById("username")
      const password = document.getElementById("password")
      const email = document.getElementById("email")
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
    const newlogo = <img src={logo} class="img-thumbnail logo" ></img>
    return (
        <div className='container'>
                {newlogo}
                <br/>
                <br/>
            <h2 className='p1'>Registration Form</h2>
            <br/>
            <p className='p1'>Please fill out the information to register!</p>
            <br/>
            <div>
                <input type="text" id="username" placeholder="Username"/>
                <input type="password" id="password" placeholder="Password"/>
                <input type="text" id="email" placeholder="Email Address"/>
                <button id="register" onClick={registerbtnclick} className='btn btn-secondary btn-lg'>Register</button>
                <br/>
                <p id="message"></p>
            </div>
            <br/>
            <p className='p1'>Please click on <Link to="login">Login</Link> if you are already registered.</p>
            
        </div>
      )
    }
export default Registration;