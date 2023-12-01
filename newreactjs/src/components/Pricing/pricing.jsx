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

function Pricing() {

const newlogo = <img src={logo} className="img-thumbnail logo1" alt='logo'></img>
const youtubesvg = <img src={youtube} className="logo" alt='youtube'></img>
const instagramsvg = <img src={instagram} className="logo" alt='instagram'></img>
const facebooksvg = <img src={facebook} className="logo" alt='facebook'></img>
const twittersvg = <img src={twitter} className="logo" alt='twitter'></img>
const phonesvg = <img src={phone} className="logo2" alt='phone'></img>
const emailsvg = <img src={email} className="logo2" alt='email'></img>
const mapsvg = <img src={map} className="logo2" alt='map'></img>

return (
<div className='background'>
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
          <a className="nav-link"><Link to="/about">About Us</Link></a>
        </li>
        <li className="nav-item navdistance">
          <a className="nav-link font3">PRICING</a>
        </li>
        <li className="nav-item dropdown navdistance">
          <a className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          <Link to="/login">MEMBERS</Link>
          </a>
          <ul className="dropdown-menu">
          <li><a className="dropdown-item"><Link to="/login">Login</Link></a></li>
            <li><a className="dropdown-item"><Link to="/registration">Register</Link></a></li>
          </ul>
          </li>
      </ul>
    </div>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
    <ul className="navbar-nav distance1">
        <li>
        <h5 className="font1 distance1">follow: </h5>
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
    <section>
    <div className="container pricing">
      <h1 className="content2 font2"> OUR PLAN </h1>
      <h4 className="fonthome">CHOOSE YOUR PRICING PLAN</h4>
      <br/>   
    </div>
      <div className="ag-format-container">
        <div className="ag-courses_box">
          <div className="ag-courses_item">
            <a className="ag-courses-item_link">
              <div className="ag-courses-item_bg"></div>
      
              <div className="ag-courses-item_title">
                <h5 className="font2">CLASS DROP-IN</h5>
                <h1 className="font3">&#8369;100</h1>
                <h4 className="font2">SINGLE CLASS</h4>
              </div>
              <div className="ag-courses-item-box">
                <ul>
                    <li>Free riding</li>
                    <li>Unlimited equipments</li>
                    <li>Personal trainer</li>
                    <li>Weight losing classes</li>
                    <li>No time restriction</li>
                    <li>Good for 24 hours</li>
                </ul>    
                <span class="ag-courses-item_font">
                    AVAILABLE DAILY
                </span>
              </div>
            </a>
          </div>
          <div className="ag-courses_item">
            <a className="ag-courses-item_link">
              <div className="ag-courses-item_bg"></div>
      
              <div className="ag-courses-item_title">
                <h5 className="font2">12 MONTH Unlimited</h5>
                <h1 className="font3">&#8369;2,500</h1>
                <h4 className="font2">SINGLE CLASS</h4>
              </div>
              <div className="ag-courses-item-box">
                <ul>
                    <li>Free riding</li>
                    <li>Unlimited equipments</li>
                    <li>Personal trainer</li>
                    <li>Weight losing classes</li>
                    <li>Month to month</li>
                    <li>No time restriction</li>
                </ul>    
                <span className="ag-courses-item_font">
                    AVAILABLE DAILY
                </span>
              </div>
            </a>
          </div>
          <div className="ag-courses_item">
            <a className="ag-courses-item_link">
              <div className="ag-courses-item_bg"></div>
      
              <div className="ag-courses-item_title">
                <h5 className="font2">6 MONTH Unlimited</h5>
                <h1 className="font3">&#8369;1,400</h1>
                <h4 className="font2">SINGLE CLASS</h4>
              </div>
      
              <div className="ag-courses-item-box">
                <ul>
                    <li>Free riding</li>
                    <li>Unlimited equipments</li>
                    <li>Personal trainer</li>
                    <li>Weight losing classes</li>
                    <li>Month to month</li>
                    <li>No time restriction</li>
                </ul>    
                <span className="ag-courses-item_font">
                  AVAILABLE DAILY
                </span>
              </div>
            </a>
          </div>
        </div>   
      </div>      
      <div className="container pricing">
        <br/>
        <h1 className="font3">REGISTER NOW TO GET MORE DEALS </h1>
        <h4 className="font2">WHERE HEALTH, BEAUTY AND FITNESS MEET.</h4>
        <br/>
        <h2 className="font2"><a class="link-offset-2 link-underline link-underline-opacity-0"><mark><Link to="/registration">REGISTER HERE</Link></mark> </a></h2>
        <br/>
      </div>
      <br/>
    </section>
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

export default Pricing;