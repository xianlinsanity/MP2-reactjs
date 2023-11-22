import React from 'react';
import logo from '../../logo.png';
import { Link } from 'react-router-dom';

function Registration() {
    const registerbtnclick = function(){
    const username = document.getElementById("username")
    const password = document.getElementById("password")
    const firstname = document.getElementById("firstname")
    const lastname = document.getElementById("lastname")
    const email = document.getElementById("email")
    const phonenumber = document.getElementById("phonenumber")
    const gender = document.getElementById("gender")
    const subscription = document.getElementById("subscription")

    fetch('http://localhost:3000/register', {
        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username: username.value,
            password: password.value,
            firstname: firstname.value,
            lastname: lastname.value,
            email: email.value,
            phonenumber: phonenumber.value,
            gender: gender.value,
            subscription: subscription.value,
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
                <label for="information" class="font">Personal Information:</label>
            <input type="text" id="firstname" placeholder="First Name"/>
            <input type="text" id="lastname" placeholder="Last Name"/>
            <input type="text" id="email" placeholder="Email Address"/>
            <input type="tel" id="phonenumber" placeholder="Phone Number"/>
            <label for="gender" class="font">Gender:</label>
             <select class="form-select" id="gender">
                 <option selected>Choose...</option>
                 <option value="Male">Male</option>
                 <option value="Female">Female</option>
                 <option value="Confused">Undecided</option>
            </select>
            <label for="subscription" class="font">Select Subscription:</label>
             <select class="form-select" id="subscription">
                 <option selected>Choose...</option>
                 <option value="walk-in">Walk-in</option>
                 <option value="1-Year">1-Year</option>
                 <option value="6-Months">6-Months</option>
            </select>
                <button id="register" onClick={registerbtnclick} className='btn btn-secondary btn-lg'>Register</button>
                <br/>
                <p id="message"></p>
            </div>
            <br/>
            <p className='p1'>Please click on <Link to="/login">Login</Link> if you are already registered.</p>
            
        </div>
      )
    }
export default Registration;