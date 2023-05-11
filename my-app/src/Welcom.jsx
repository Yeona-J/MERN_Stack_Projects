import './App.css';
import React from 'react';

function WelcomPage(props) {
    return (
        <>
        <h1>Welcome to the game, {props.username}</h1>
        </>
    )
}

export default WelcomePage; //Use like a module