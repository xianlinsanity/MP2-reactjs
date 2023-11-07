import React from "react";

class RegisterPage extends React.Component {

    render(){
        return(
        <div>
        <h2 style="font-family: Verdana, Geneva, Tahoma, sans-serif; color: black;">Registration Form</h5>
        <p style="font-family: Verdana, Geneva, Tahoma, sans-serif; color: black;">Please fill out the information to register!</p>
        <form>
            <input type="text" id="username" placeholder="Username">
            <input type="password" id="password" placeholder="Password">
            <input type="text" id="email" placeholder="Email Address">
            <button id="register">Register</button>
            <p id="message" style="color: #007bff;"></p>
        </form>
        <p style="font-family: Verdana, Geneva, Tahoma, sans-serif; color: black;">Please click on <a href="login.html">Login</a> if you are already registered.</p>
    </div>
      )
    }
}

export default RegisterPage;