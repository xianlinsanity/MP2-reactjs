import React, {useEffect, useState} from 'react';
import { Link } from "react-router-dom";
import logo from '../../logo.png'

function Home() {
    const [userData, setUserData] = useState({});
    const userToken = localStorage.getItem('token');
	const logout = ()=>{
        localStorage.clear(); // clear yung storage including token
        window.location.href = 'login'; // redirect to login page
    }

    const getUserData = () => {
        fetch('http://localhost:3000/user', {
            method: 'get',
            headers: {
                'Authorization': 'Bearer ' + userToken
            },
            body: null
        }).then((result)=>{
            return result.json();
        }).then((result)=>{
            console.log('result: ', result)
            if(result.success)
                setUserData(result.data)
        })
    }

    useEffect(()=>{
        getUserData()
    }, [])
    const newlogo = <img src={logo} class="img-thumbnail logo1" ></img>
    return (
    
        <div className='container1'>
            {newlogo}
            <br />
            <h1 className='p1'>Profile</h1>
            <br />
            <br />
            <h4 className='p1'>Hello <mark>{userData.username}</mark></h4>
            <br />
            <br />
        <table class="table table-dark table-hover">
            <thead>
                <tr>
                <th scope="col">Personal Information</th>
                <th scope="col"></th>        
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>First Name:</td>
                    <td className='p2'>{userData.firstname}</td>
                </tr>
                <tr>
                    <td>Last Name:</td>
                    <td className='p2'>{userData.lastname}</td>
                </tr>
                <tr>
                    <td>E-mail Address:</td>
                    <td className='p2'>{userData.email}</td>
                </tr>
                <tr>
                    <td>Phone Number:</td>
                    <td className='p2'>{userData.phonenumber}</td>
                </tr>
                <tr>
                    <td>Gender:</td>
                    <td className='p2'>{userData.gender}</td>
                </tr>
                <tr>
                    <td>Subscription:</td>
                    <td className='p2'>{userData.subscription}</td>
                </tr>
                <tr>
                    <td>Age:</td>
                    <td className='p2'>{userData.age}</td>
                </tr>
                <tr>
                    <td>BMI:</td>
                    <td className='p2'>{userData.bmi}</td>
                </tr>
            </tbody>
        </table>
        <br />
        <br />
            <button className='btn btn-secondary btn-lg' onClick={logout}>Logout</button>
        </div>
   
    )
}

export default Home;