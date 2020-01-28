import React from "react";
import '../Css/header.css'

const Header = () => {
    return (
        <div className="header">
            <img src={require("../images/logo.png")} alt="" className="logo"/>
            <ul>
                <li><a href="#s">Home</a></li>
                <li><a href="#s">About</a></li>
                <li><a href="#s">My work</a></li>
                <li><a href="#s">Projects</a></li>
                <li><a href="#s">Reviews</a></li>
            </ul>
            <div className="social-wrapper">
                <a href="https://www.facebook.com">
                    <img src={require("../images/social/facebook.svg")} alt="facebook" className="social"/>
                </a>
                <a href="#s">
                    <img src={require("../images/social/linkedin.svg")} alt="" className="social"/>
                </a>
                <a href="#s">
                    <img src={require("../images/social/mail.svg")} alt="" className="social"/>
                </a>
            </div>
        </div>
    )
}

export default Header;
