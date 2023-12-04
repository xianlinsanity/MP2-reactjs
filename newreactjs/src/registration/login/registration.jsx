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
  const computeClick = (e)=>{
    e.preventDefault();
       const weight = parseFloat(document.getElementById('weight').value);
       const height = parseFloat(document.getElementById('height').value) / 100;
       const bmi = weight / (height * height);
       document.getElementById('result').innerHTML = `Your BMI is: ${bmi.toFixed(2)}`;
 }
    const registerbtnclick = function(){
    const username = document.getElementById("username")
    const password = document.getElementById("password")
    const firstname = document.getElementById("firstname")
    const lastname = document.getElementById("lastname")
    const email = document.getElementById("email")
    const phonenumber = document.getElementById("phonenumber")
    const gender = document.getElementById("gender")
    const subscription = document.getElementById("subscription")
    const program = document.getElementById("program")
    const age = document.getElementById("age")
    const bmi = document.getElementById("bmi")

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
            program: program.value,
            age: age.value,
            bmi: bmi.value,
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
          <a className="nav-link"><Link to="/pricing">Pricing</Link></a>
        </li>
        <li className="nav-item dropdown navdistance">
          <a className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          <Link to="/login">Members</Link>
          </a>
          <ul className="dropdown-menu">
          <li><a className="dropdown-item"><Link to="/login">Login</Link></a></li>
            <li><a className="dropdown-item" aria-current="page"></a></li>
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
            <h2 className='p2'>Registration Form</h2>
            <br/>
            <p className='p1'>Please fill out the information to register!</p>
            <br/>
            <div>
                <input type="text" id="username" placeholder="Username"/>
                <input type="password" id="password" placeholder="Password"/>
                <label for="information" className="p2">Personal Information:</label>
                <input type="text" id="firstname" placeholder="First Name"/>
                <input type="text" id="lastname" placeholder="Last Name"/>
                <input type="text" id="email" placeholder="Email Address"/>
                <input type="tel" id="phonenumber" placeholder="Phone Number"/>
                <label for="gender" className="p2">Gender:</label>
                <select class="form-select" id="gender">
                  <option selected>Choose...</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Confused">Undecided</option>
                </select>
            <label for="subscription" className="p2">Select Subscription:</label>
             <select class="form-select" id="subscription">
                 <option selected>Choose...</option>
                 <option value="walk-in">Walk-in</option>
                 <option value="1-Year">1-Year</option>
                 <option value="6-Months">6-Months</option>
            </select>
            <label for="program" className="p2">Select Program:</label>
             <select class="form-select" id="program">
                 <option selected>Choose...</option>
                 <option value="yoga">Yoga</option>
                 <option value="weightlifting">Weightlifting</option>
                 <option value="cardio">Cardio</option>
            </select>
            <br />
            <input type="number" id="age" placeholder="Age"/>
            <input type="number" id="bmi" placeholder="BMI"/>
            <div className="nav-item dropdown">
            <a className="nav-link dropdown-toggle font3" role="button" data-bs-toggle="dropdown" aria-expanded="false">
             BMI Calculator
             </a>
             <div className="col-lg-6 dropdown-menu">
                <div className="calculator">
                  <h1 className="font5">BMI Calculator</h1>
                  <form id="bmiForm dropdown-item">
                    <label for="weight" className='font3' required>Weight (kg):</label>
                    <input type="number" id="weight" name="weight" required/>
                    <br/>
                    <label for="height" className='font3' required>Height (cm):</label>
                    <input type="number" id="height" name="height" required/>
                    <br/>
                    <br/>
                    <input type="submit" value="Calculate" onClick={computeClick}/>
                  </form>
                  <br/>
                  <p id="result" class="font3"></p>
                </div>
              </div>
              <br />
                <button id="register" onClick={registerbtnclick} className='btn btn-secondary btn-lg'>Register</button>
                <br/>
                <p className='p2' id="message"></p>
            </div>
            <br/>
            <p className='p2'>Please click on <Link to="/login">Login</Link> if you are already registered.</p>
            </div>
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
export default Registration;