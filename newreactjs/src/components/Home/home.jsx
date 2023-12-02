import React from 'react';
import logo from '../../logo.png'
import youtube from '../../youtube.svg'
import facebook from '../../facebook.svg'
import instagram from '../../instagram.svg'
import twitter from '../../twitter-x.svg'
import phone from '../../phone.svg'
import email from '../../e-mail.svg'
import map from '../../map.svg'
import trainer1 from '../../team1.jpg'
import trainer2 from '../../team2.jpg'
import trainer3 from '../../team3.jpg'
import waistpic from '../../waist.jpg'
import vid1 from '../../video1.mp4'
import vid2 from '../../video2.mp4'
import vid3 from '../../video3.mp4'
import { Link } from 'react-router-dom';


function Home() {

  const computeClick = (e)=>{
     e.preventDefault();
        const weight = parseFloat(document.getElementById('weight').value);
        const height = parseFloat(document.getElementById('height').value) / 100;
        const bmi = weight / (height * height);
        document.getElementById('result').innerHTML = `Your BMI is: ${bmi.toFixed(2)}`;
  }
 
      //   document.getElementById('bmiForm').addEventListener('submit', function (e) {
      //   e.preventDefault();
      //   const weight = parseFloat(document.getElementById('weight').value);
      //   const height = parseFloat(document.getElementById('height').value) / 100;
      //   const bmi = weight / (height * height);
      //   document.getElementById('result').innerHTML = `Your BMI is: ${bmi.toFixed(2)}`;
      // });

const newlogo = <img src={logo} className="img-thumbnail logo1" alt='logo'></img>
const youtubesvg = <img src={youtube} className="logo" alt='youtube'></img>
const instagramsvg = <img src={instagram} className="logo" alt='instagram'></img>
const facebooksvg = <img src={facebook} className="logo" alt='facebook'></img>
const twittersvg = <img src={twitter} className="logo" alt='twitter'></img>
const phonesvg = <img src={phone} className="logo2" alt='phone'></img>
const emailsvg = <img src={email} className="logo2" alt='email'></img>
const mapsvg = <img src={map} className="logo2" alt='map'></img>
const tr1pic = <img src={trainer1} className="img-responsive" alt='trainer'></img>
const tr2pic = <img src={trainer2} className="img-responsive" alt='trainer'></img>
const tr3pic = <img src={trainer3} className="img-responsive" alt='trainer'></img>
const wmpic = <img src={waistpic} className="img-fluid" alt='waist'></img>
const yoga = <video muted autoPlay loop playsinline src={vid1} className="exercise" alt='yoga' type="video/mp4"></video>
const weightlifting = <video muted autoPlay loop playsinline src={vid2} className="exercise" alt='weightlifting' type="video/mp4"></video>
const cardio = <video muted autoPlay loop playsinline src={vid3} className="exercise" alt='cardio' type="video/mp4"></video>

return (
<div className='background'>
  <div>
  <nav className="navbar navbar-expand-lg bg-dark border-bottom border-body" data-bs-theme="dark">
  <div className="container distance1">
    <a className="navbar-brand"><Link to="/home">{newlogo}</Link></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse distance2 navbg" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item navdistance">
        <a className="nav-link active" aria-current="page">HOME</a>
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
        <li className="nav-item distance1">
        <a href="https://www.facebook.com">{facebooksvg}</a>
        </li>
        <li className="nav-item distance1">
        <a href="https://www.twitter.com">{twittersvg}</a>
        </li>
        <li className="nav-item distance1">
        <a href="https://www.youtube.com">{youtubesvg}</a>
        </li>
        <li className="nav-item distance1">
          <a href="https://www.instagram.com">{instagramsvg} </a>
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
    <h1 className="content font2"> BE THE BEST VERSION OF YOURSELF... <br/> JOIN OUR PROGRAM! </h1>
    <p className="fonthome"> Join now and enjoy a &#8369;100 gift card!</p>
    <h2 className="font2"><a className="link-offset-2 link-underline link-underline-opacity-0"><Link to="/registration"><mark>JOIN NOW</mark></Link></a></h2>
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
      {yoga}
        <h4 className="text-bg-secondary p-3">YOGA</h4>
        <p className="font3">MONDAYS-FRIDAYS</p>
        <p className="font3">6AM-9AM / 6PM-9PM</p>
      </div>
    </div>
    <div className="col-lg-4">
      <div className="video-item">
        {weightlifting}
        <h4 className="text-bg-secondary p-3">WEIGHT LIFTING</h4>
        <p className="font3">EVERYDAY</p>
        <p className="font3">6AM - 12 MIDNIGHT</p>
      </div>
    </div>
    <div className="col-lg-4">
      <div className="video-item">
        {cardio}
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
<h2 className="font2"><a class="link-offset-2 link-underline link-underline-opacity-0"><Link to="/registration"><mark>REGISTER HERE</mark></Link> </a></h2>
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
                {tr1pic}
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
            {tr2pic}
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
            {tr3pic}
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
      <h1 className="p-3 mb-2 .bg-success-subtle text-emphasis-light font2 container2" id='bmilink'>LET'S GET YOUR BODY MASS INDEX (BMI)</h1>
      <div className="container" >
          <div className="row">
              <div className="col-lg-6">
              {[wmpic]}
              </div>
              <div className="col-lg-6">
                <div className="calculator">
                  <h1 className="font3">BMI Calculator</h1>
                  <form id="bmiForm">
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
              </div>
            <div className="section-title chart-title chart">
                <h2 className="font3">BMI CALCULATOR CHART</h2>  
             <div className="chart-table">
                <table className="table table-dark table-striped-columns">
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
      <h2 className="font2"><a className="link-offset-2 link-underline link-underline-opacity-0" href="#"><Link to="/registration"><mark>BOOK NOW!</mark></Link> </a></h2>
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