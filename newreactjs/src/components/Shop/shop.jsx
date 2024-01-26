import React, { useState } from 'react'
import logo from '../../logo.png'
import youtube from '../../youtube.svg'
import facebook from '../../facebook.svg'
import instagram from '../../instagram.svg'
import twitter from '../../twitter-x.svg'
import phone from '../../phone.svg'
import email from '../../e-mail.svg'
import map from '../../map.svg'
import { Link } from 'react-router-dom'
import Card from './card'
import { CartProvider, useCart } from 'react-use-cart'
import Cartpage from './cartpage'
// import TrackOrder from './order-tracker'


function Shop() {

    const newlogo = <img src={logo} className="img-thumbnail logo1" alt='logo'></img>
    const youtubesvg = <img src={youtube} className="logo" alt='youtube'></img>
    const instagramsvg = <img src={instagram} className="logo" alt='instagram'></img>
    const facebooksvg = <img src={facebook} className="logo" alt='facebook'></img>
    const twittersvg = <img src={twitter} className="logo" alt='twitter'></img>
    const phonesvg = <img src={phone} className="logo2" alt='phone'></img>
    const emailsvg = <img src={email} className="logo2" alt='email'></img>
    const mapsvg = <img src={map} className="logo2" alt='map'></img>
    const title = "All Items"




    return (
        <div className='background'>
            <div>
                <nav className="navbar navbar-expand-lg bg-dark border-bottom border-body" data-bs-theme="dark">
                    <div className="container distance1">
                        <a className="navbar-brand"><Link to="/home">{newlogo}</Link></a>
                        <button className="navbar-toggler nav-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse navbg distance2" id="navbarNavDropdown">
                            <ul className="navbar-nav">
                                <li className="nav-item navdistance">
                                    <a className="nav-link active" aria-current="page">HOME</a>
                                </li>
                                <li className="nav-item navdistance">
                                    <a className="nav-link"><Link to="/about">About Us</Link></a>
                                </li>
                                <li className="nav-item navdistance">
                                    <a className="nav-link"><Link to="/shop">Shop Now</Link></a>
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
            {/* Accessories */}
            <div className="container shopBackground">
                <h1 className="content2 font2"> GEAR UP NOW </h1>
                <h4 className="fonthome">YOU MAY BUY OUR GYM WEAR HERE!</h4>
            </div>
            <br />
            <br />
            <br />
            {/* <div>
                <TrackOrder />                
            </div> */}
            <div className='container-fluid' >
                <CartProvider>
                    <div class="row g-0 text-center">
                        <br />
                        <div class="col-sm-6 col-md-6">
                            <h1 className='p2'>{title}</h1>
                            <Card />
                        </div>
                        <div class="col-6 col-md-4 mx-auto p-2">
                            <Cartpage />
                        </div>
                    </div>
                </CartProvider>
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

