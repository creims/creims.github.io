import React from 'react';
import './IntroSlide.css';

function IntroSlide(props) {
    return (
        <div className={props.className + " intro-slide"}>
            <img src={props.img} alt={props.title}/>
            <h1 className="intro-title">{props.title}</h1>
            <p className="intro-text">{props.text}</p>
        </div>
    );
}

export default IntroSlide;