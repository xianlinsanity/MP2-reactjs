import React from 'react'
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

function Shop() {

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
                        <div className="collapse navbar-collapse navbg distance2" id="navbarNavDropdown">
                            <ul className="navbar-nav">
                                <li className="nav-item navdistance">
                                    <a className="nav-link"><Link to="/home">Home</Link></a>
                                </li>
                                <li className="nav-item navdistance">
                                    <a className="nav-link"><Link to="/about">About Us</Link></a>
                                </li>
                                <li className="nav-item navdistance">
                                    <a className="nav-link" aria-current="page">Shop Now</a>
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
            <br />
            <br />
                     {/* Accessories */}
            <div className='container'>
            <nav>
                <div className="nav nav-tabs nav-pills nav-justified" id="nav-tab" role="tablist">
                    <button className="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Men's Wear</button>
                    <button className="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Women's Wear</button>
                    <button className="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Accessories</button>
                    
                </div>
            </nav>
            <div class="tab-content" id="nav-tabContent">
                <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab" tabindex="0">...</div>
                <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab" tabindex="0">...</div>
                <div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab" tabindex="0">...</div>
                <div className="tab-pane fade" id="nav-disabled" role="tabpanel" aria-labelledby="nav-disabled-tab" tabindex="0">...</div>
            </div>
            </div>
            <br />
            <br />
            <br />
            <br />
            {/* footer */}
            <footer className="footerbg border border-secondary">
                <br />
                <div className="container text-center">
                    <div className="row">
                        <div className="col">
                            {mapsvg} <p className="font2">123456 Juan Luna St. <br /> Cebu City, Philippines 6000</p>
                        </div>
                        <div className="col">
                            {phonesvg} <p className="font2"> +(63)945-134-6666 <br /> (012)345-6789</p>
                        </div>
                        <div className="col">
                            {emailsvg} <p className="font2">nopainnogain@gmail.com <br />contactus@nopain.com</p>
                        </div>
                    </div>
                    <br />
                </div>
                <p className="font2 p-3 mb-2 bg-black text-white">Copyright ©2023 All rights reserved | No Pain No Gain®</p>
            </footer>
        </div>
    )
}

export default Shop;

