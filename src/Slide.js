import React from 'react';
import './Slide.css';

import BanSVG from './img/ban.svg';
import SourceSVG from './img/fork.svg';
import LiveSVG from './img/external-link.svg';

function LinkButton(props) {
    const btnClass = "link-button " + (props.link ? "active-link" : "no-link");
    const btnIcon = props.link ? props.svg : BanSVG;
    return (
        <a
            className={btnClass}
            href={props.link}
        >
            <img className="svg" src={btnIcon} alt={props.text}/>
            <br/>
            {props.text}
        </a>
    );
}

function Slide(props) {
    return (
        <div className={"slide " + props.className}>
            <img className="image" src={props.img} alt={props.title}/>
            <h1 className="title">
                {props.title}
            </h1>
            <p className="description">
                {props.desc}
            </p>

            <LinkButton link={props.srclink} svg={SourceSVG} text="Source"/>
            <LinkButton link={props.livelink} svg={LiveSVG} text="Live" />

        </div>
    );
}

export default Slide;