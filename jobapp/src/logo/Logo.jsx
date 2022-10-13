import React from "react";
import logo from '../assets/logo/Jobapp.png';
import './logo.css';

const Logo = () => {
    return (
        <div>
            <div className="jobApp">
            <img src={logo} alt="logo" className="logo"/>
            </div>
        </div>
    )
}

export default Logo