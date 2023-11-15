
import React from 'react';
import { Link } from "react-router-dom";

function Home() {
	const logout = ()=>{
        localStorage.clear(); // clear yung storage including token
        window.location.href = 'login'; // redirect to login page
    }
    return (
        <div>
            <h2>this is my homepage</h2>
            <button className='btn btn-default' onClick={logout}>Logout</button>
        </div>
    )
}

export default Home;