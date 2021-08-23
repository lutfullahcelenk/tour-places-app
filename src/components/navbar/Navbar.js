import React from "react";
import "./Navbar.css";

const Navbar = () => {
    return(
        <div className = "navbar">
            <a href="aboutus">ABOUT US</a>
            <a href="foryou">FOR YOU</a>
            <a href="services">SERVICES</a>
            <a href="blog">BLOG</a>
            <a href="vlog">VLOG</a>
            <a href="contact">CONTACT</a>

        </div>
    )
}

export default Navbar;