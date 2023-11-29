import React from 'react';
import logo from '../../logo.png'
import youtube from '../../youtube.svg'
import facebook from '../../facebook.svg'
import instagram from '../../instagram.svg'
import twitter from '../../twitter-x.svg'
import phone from '../../phone.svg'
import email from '../../e-mail.svg'
import map from '../../map.svg'
import equipment from '../../equipmwnt2.svg'
import heartbeat from '../../heartbeat.svg'
import training from '../../training.svg'
import menu from '../../menu.svg'
import testimonial1 from '../../testimonial1.jpg'
import testimonial2 from '../../testimonial2.jpg'
import testimonial3 from '../../testimonial3.jpg'
import { Link } from 'react-router-dom';

function About() {

const newlogo = <img src={logo} className="img-thumbnail logo1" alt='logo'></img>
const youtubesvg = <img src={youtube} className="logo" alt='youtube'></img>
const instagramsvg = <img src={instagram} className="logo" alt='instagram'></img>
const facebooksvg = <img src={facebook} className="logo" alt='facebook'></img>
const twittersvg = <img src={twitter} className="logo" alt='twitter'></img>
const phonesvg = <img src={phone} className="logo2" alt='phone'></img>
const emailsvg = <img src={email} className="logo2" alt='email'></img>
const mapsvg = <img src={map} className="logo2" alt='map'></img>
const equipsvg = <img src={equipment} alt='equipment'></img>
const heartsvg = <img src={heartbeat} alt='heartbeat'></img>
const trainsvg = <img src={training} alt='training'></img>
const menusvg = <img src={menu} alt='training'></img>
const test1 = <img src={testimonial1} className="rounded-circle" alt='testimonial'></img>
const test2 = <img src={testimonial2} className="rounded-circle" alt='testimonial'></img>
const test3 = <img src={testimonial3} className="rounded-circle" alt='testimonial'></img>

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
          <a className="nav-link"><Link to="/about">About Us</Link></a>
        </li>
        <li className="nav-item navdistance">
          <a className="nav-link">Pricing</a>
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
    <div className="container about">
      <br/>
      <br/>
      <h1 className="content2 font2"> WHY CHOOSE US? </h1>
      <p className="fonthome"> WE WILL HELP YOU PUSH YOUR LIMIT</p>
      <br/>
      <div className="container text-center">
        <div className="row">
          <div className="col">
          {equipsvg}
            <br/>
            <br/>
            <h5 className="font1">MODERN EQUIPMENTS</h5>
            <p className="font2">Our state-of-the-art gym is where cutting-edge technology meets fitness excellence. Our facility boasts an impressive array of modern equipment designed to cater to all your workout needs.</p>
          </div>
          <div className="col">
          {menusvg}
            <br/>
            <br/>
            <h5 className="font1">HEALTHY DIET PLAN</h5>
            <p className="font2">We understand that fitness isn't just about workouts—it also includes nutrition. Our dedicated team experts design personalized and sustainable diet plans tailored to individual fitness goals.</p>
          </div>
          <div className="col">
          {trainsvg}
            <br/>
            <br/>
            <h5 className="font1">PROFESSIONAL TRAINERS</h5>
            <p className="font2">Our gym’s professional trainers are experts in fitness and wellness who can help you achieve your goals. They can design a personalized program that suits your needs and preferences</p>
          </div>
          <div className="col circle">
          {heartsvg}
            <br/>
            <br/>
            <h5 class="font1">ACCORDING TO YOUR NEEDS</h5>
            <p class="font2">We offer a customize approach that tailors the workout program to each individual as we understand that every client is unique and has different needs and goals.</p>
          </div>
        </div>
      </div>
    </div>
    </section>
    {/* <!-- Testimonials --> */}
    <section>
    <div className="container trainorbackground">
      <h1 className="font2"> TESTIMONIALS </h1>
      <br/>
      <h4 className="font3">HERE'S WHAT OUR SATISFIED CLIENTS SAY ABOUT OUR SERVICE</h4>
      <br/>
      <div className="container mt-5 mb-5">   
        <div className="row g-2">
            <div className="col-md-4">
                <div className="card p-3 text-center px-4">                    
                    <div className="user-image">                        
                <img src="pictures/testimonial-1.jpg" class="rounded-circle" width="80"/>
                    </div>                    
                    <div className="user-content">                        
                        <h5 className="mb-0 font2">Jane Hardy</h5>
                        <span className="font3">BANK MANAGER</span>
                        <p>I have been going to this gym for over a year now and I can say that it is the best decision I ever made. The gym is clean, spacious, and well-equipped with modern machines and friendly staff. </p>
                    </div>                    
                    <div className="ratings">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>      
                        <i className="fa fa-star"></i>                   
                    </div>                    
                </div>
            </div>            
            <div className="col-md-4">                
                <div className="card p-3 text-center px-4">                    
                    <div className="user-image">                        
                <img src="pictures/testimonial-3.jpg" class="rounded-circle" width="66"/>                        
                    </div>                    
                    <div className="user-content">                        
                        <h5 className="mb-0 font2">Mark Smith</h5>
                        <span className="font3">Web Developer</span>
                        <p>The trainers are knowledgeable, supportive, and motivating. They help me set realistic goals and design personalized workout plans that suit my needs and preferences. 
                        </p>                        
                    </div>                    
                    <div className="ratings">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>                        
                    </div>                    
                </div>                
            </div>            
            <div className="col-md-4">                
                <div className="card p-3 text-center px-4">                    
                    <div className="user-image">                        
                <img src="pictures/testimonial-2.jpg" className="rounded-circle" width="80"/>                        
                    </div>                    
                    <div className="user-content">                        
                        <h5 className="mb-0 font2">Veera  Duncan</h5>
                        <span className="font3">Mechanical Engineer</span>
                        <p>This gym is more than just a place to exercise, it is a community of like-minded people who encourage each other. I highly recommend this gym to anyone who wants to improve their well-being.
                        </p>                        
                    </div>                    
                    <div className="ratings">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>      
                        <i className="fa fa-star"></i>                   
                    </div>                    
                </div>                
            </div>       
        </div>
    </div>
    <div className="container">
      <h1 className="font2">WHAT ARE YOU WAITING FOR? </h1>
      <h4 className="font3">HELP US HELP YOU</h4>
      <br/>
      <h2 className="font2"><a className="link-offset-2 link-underline link-underline-opacity-0" ><mark>REGISTER HERE</mark> </a></h2>
    </div>
    </div>
    </section>
    <br/>
    <br/>
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

export default About;