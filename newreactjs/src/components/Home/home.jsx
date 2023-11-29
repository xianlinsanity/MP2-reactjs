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

function Home() {
 
        document.getElementById('bmiForm').addEventListener('submit', function (e) {
        e.preventDefault();
        const weight = parseFloat(document.getElementById('weight').value);
        const height = parseFloat(document.getElementById('height').value) / 100;
        const bmi = weight / (height * height);
        document.getElementById('result').innerHTML = `Your BMI is: ${bmi.toFixed(2)}`;
      });

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
    <div className="collapse navbar-collapse distance2" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item navdistance">
        <a className="nav-link active" aria-current="page"><Link to="/home">Home</Link></a>
        </li>
        <li className="nav-item navdistance">
          <a className="nav-link" href="about.html">About Us</a>
        </li>
        <li className="nav-item navdistance">
          <a className="nav-link" href="pricing.html">Pricing</a>
        </li>
        <li className="nav-item dropdown navdistance">
          <a className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Members
          </a>
          <ul className="dropdown-menu">
          <li><a className="dropdown-item"><Link to="/login">Login</Link></a></li>
            <li><a className="dropdown-item"><Link to="/registration">Register</Link></a></li>
          </ul>
        </li>
      </ul>
    </div>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
    <ul className="navbar-nav distance2">
        <li>
        <h5 className="font1 distance2">follow: </h5>
        </li>
        <li className="nav-item distance2">
        <a href="#"/>{facebooksvg}
        </li>
        <li className="nav-item distance2">
        <a href="#"/>{twittersvg}
        </li>
        <li className="nav-item distance2">
        <a href="#"/>{youtubesvg}
        </li>
        <li className="nav-item distance2">
          <a href="#"/>{instagramsvg}
        </li>
    </ul>
    </div>
    </div>
    </nav>
   </div>
    <br/>
    <br/>
    <br/>
    <br/>
  <section>
      <div className="home">
        <br/>
        <br/>
    <h1 className="content font2"> BE THE BEST VERSION OF YOURSELF... <br/> JOIN OUR PROGRAM! </h1>
    <p className="fonthome"> Join now and enjoy a &#8369;100 gift card!</p>
    <h2 className="font2"><a className="link-offset-2 link-underline link-underline-opacity-0"><mark>JOIN NOW</mark> </a></h2>
      </div>
  </section>
{/* <!-- exercises --> */}
<section className="exercisebg">
<br/>
<br/>
  <h2 className="font2">HERE ARE THE <span class="font3">PROGRAMS</span> THAT WE OFFER</h2>
  <br/>
  <br/>
<div className="container text-center video-container">
  <div className="row">
    <div className="col-lg-4">
      <div className="video-item">
        <video muted autoplay loop playsinline>
          <source src="videos/video5.mp4" type="video/mp4"/>
          Your browser does not support the video tag.
        </video>
        <h4 className="text-bg-secondary p-3">YOGA</h4>
        <p className="font3">MONDAYS-FRIDAYS</p>
        <p className="font3">6AM-9AM / 6PM-9PM</p>
      </div>
    </div>
    <div className="col-lg-4">
      <div className="video-item">
        <video muted autoplay loop playsinline>
          <source src="videos/video2.mp4" type="video/mp4"/>
          Your browser does not support the video tag.
        </video>
        <h4 className="text-bg-secondary p-3">WEIGHT LIFTING</h4>
        <p className="font3">EVERYDAY</p>
        <p className="font3">6AM - 12 MIDNIGHT</p>
      </div>
    </div>
    <div className="col-lg-4">
      <div className="video-item">
        <video muted autoplay loop playsinline>
          <source src="videos/video3.mp4" type="video/mp4"/>
          Your browser does not support the video tag.
        </video>
        <h4 className="text-bg-secondary p-3">GROUP CARDIO</h4>
        <p className="font3">SATURDAYS AND SUNDAYS</p>
        <p className="font3">6AM -9AM / 5PM-9PM</p>
      </div>
    </div>
  </div>
</div>
<br/>
<h2 className="font2">REGISTER NOW TO GET MORE DEALS</h2>
<br/>
<h5 className="font3">WE WILL HELP YOU ATTAIN THE BEST VERSION OF YOURSELF</h5>
<br/>
<h2 className="font2"><a class="link-offset-2 link-underline link-underline-opacity-0"><mark>REGISTER HERE</mark> </a></h2>
<br/>
<br/>
</section>
{/* <!-- trainers --> */}
<section className="trainorbackground">
  <br/>
  <br/>
  <br/>
  <div className="container text-center">
        <h2 className="font1">MEET OUR INSTRUCTORS!</h2>
    </div>
  <br/>
  <br/>
  <div className="container">
    <div className="container text-center">
      <div className="row align-items-start">
        <div className="col">
          <div className="card__collection clear-fix">
            <div className="cards cards--two">
                <img src="pictures/team-1.jpg" class="img-responsive" alt="Cards Image"/>
                <span class="cards--two__rect"></span>
                <span class="cards--two__tri"></span>
                <p>Jane Doe</p>
                <ul class="cards__list">
                <li><mark> Aerobics </mark></li>
                </ul>
              </div>
          </div>
        </div>
        <div className="col">
          <div className="card__collection clear-fix">
            <div className="cards cards--two">
                <img src="pictures/team-2.jpg" class="img-responsive" alt="Cards Image"/>
                <span className="cards--two__rect"></span>
                <span className="cards--two__tri"></span>
                <p>Joe Black</p>
                <ul className="cards__list">
                  <li><mark> Bodybuilding </mark></li>
                  </ul>
              </div>
          </div>
        </div>
        <div className="col">
          <div className="card__collection clear-fix">
            <div className="cards cards--two">
                <img src="pictures/team-6.jpg" class="img-responsive" alt="Cards Image"/>
                <span className="cards--two__rect"></span>
                <span className="cards--two__tri"></span>
                <p>Maria Martinez</p>
                <ul className="cards__list">
                  <li><mark> Cardio </mark></li>
                  </ul>
              </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    {/* <!-- BMI --> */}
<section>
      <br/>
      <br/>
      <h1 className="p-3 mb-2 .bg-success-subtle text-emphasis-light font2">LET'S GET YOUR BODY MASS INDEX (BMI)</h1>
      <div className="container" >
          <div className="row">
              <div className="col-lg-6">
                <img src="pictures/waistmeasure.jpg" class="img-fluid" alt="waist"/>
              </div>
              <div className="col-lg-6" style="float:right">
                <div className="calculator">
                  <h1 className="font3">BMI Calculator</h1>
                  <form id="bmiForm">
                    <label for="weight">Weight (kg):</label>
                    <input type="number" id="weight" name="weight" required/>
                    <br/>
                    <label for="height">Height (cm):</label>
                    <input type="number" id="height" name="height" required/>
                    <br/>
                    <br/>
                    <input type="submit" value="Calculate"/>
                  </form>
                  <br/>
                  <p id="result" class="font3"></p>
                </div>
              </div>
              </div>
            <div className="section-title chart-title chart">
                <h2 className="font3">BMI CALCULATOR CHART</h2>  
             <div className="chart-table">
                <table className="table table-dark table-striped-columns" style="margin: auto">
                    <thead>
                        <tr>
                            <th>BMI</th>
                            <th>WEIGHT STATUS</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="point">Below 18.5</td>
                            <td>Underweight</td>
                        </tr>
                        <tr>
                            <td class="point">18.5 - 24.9</td>
                            <td>Healthy</td>
                        </tr>
                        <tr>
                            <td class="point">25.0 - 29.9</td>
                            <td>Overweight</td>
                        </tr>
                        <tr>
                            <td class="point">30.0 - and Above</td>
                            <td>Obese</td>
                        </tr>
                    </tbody>
                </table>
              </div>
           </div>
      </div>
      <br/>
      <h2 className="font2"><a className="link-offset-2 link-underline link-underline-opacity-0" href="#"><mark>BOOK NOW!</mark> </a></h2>
      <br/>
      <h5 className="font3">TO ATTAIN THAT PERFECT HEALTHY BODY...</h5>
      <br/>
</section>
{/* footer */}
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

export default Home;