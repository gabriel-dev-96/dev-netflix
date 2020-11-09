import React, { useState, useEffect} from 'react';
import './css/nav.css';

const Nav =()=>{
    const [show,handleShow]= useState(false);
    useEffect(() => {
        document.addEventListener("scroll",()=>{
            if(window.scrollY>100){
                handleShow(true);
            } else handleShow(false)
        })
    }, [])
    return(
        <div className={`nav ${show && "nav__black"}`}>
            <img 
                className="nav__logo"
                src="https://upload.wikimedia.org/wikipedia/commons/0/0f/Logo_Netflix.png"
                alt="Netflix Logo"
            />
            <img 
                className="nav__avatar"
                src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png" 
                alt="Avatar Logo"
            />
        </div>
    )
}

export default Nav;