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
    const newlogo = <img src={logo} class="img-thumbnail logo" ></img>
return (
    <div className='container'>
        {newlogo}
        <br/>
        <br/>
        <h2 className='p1'>Member's Login</h2>
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
        <p className='p1'>Not yet a member? Please click<Link to="/registration">here</Link>to register and avail discounts and freebies!</p>
    </div>
  )
}

export default Login;