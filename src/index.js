import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Carousel from './Carousel';

const projects = [
    {
      name: "greeting",
      title: "C. Reims Projects",
      text: "Hello and welcome! Here you'll find links to projects written in various languages. Most of them " +
          "have a live version, so please give them a try!"
    },
    {
        name: "chessamateur",
        title: "Chess Amateur",
        desc: "A C++ chess engine with an HTML/CSS/JavaScript front end",
        srclink: "https://github.com/creims/ChessAmateur/",
        livelink: "https://creims.github.io/ChessAmateur/",
    },
    {
        name: "metronome",
        title: "Metronome",
        desc: "A flexible metronome with visualizations. Capable of playing complex polyrhythms",
        srclink: "https://github.com/creims/metronome",
        livelink: "https://creims.github.io/metronome",
    },
    {
        name: "fuwahex",
        title: "FuwaHex",
        desc: "A simple and lightweight hex viewer undertaken to learn ES6. Inspired by the hex editor Frhed",
        srclink: "https://github.com/creims/fuwahex",
        livelink: "https://creims.github.io/fuwahex",
    },
    {
        name: "chordchart",
        title: "ChordChart",
        desc: "A bass/guitar chord chart generator. Can handle arbitrary tunings as well as any number of strings",
        srclink: "https://github.com/creims/chordchart",
        livelink: "https://creims.github.io/chordchart",
    },
    {
        name: "fractaltree",
        title: "Fractal Tree",
        desc: "A fractal tree generator written in C with an HTML/CSS/JavaScript front end",
        srclink: "https://github.com/creims/fractaltree",
        livelink: "https://creims.github.io/fractaltree/",
    },
    {
        name: "rmlparse",
        title: "RML Parse",
        desc: "A parser/playback application for an alpha-stage music notation language (think sheet music)",
        srclink: "https://github.com/creims/rmlparse",
    },
];

function wrangleImages(r) {
    projects.forEach(project => {
        const projImg = r("./" + project.name + ".png");
        if(projImg) {
            project.img = projImg;
        }
    });
}

wrangleImages(require.context('./img/', false, /\.png$/));

ReactDOM.render(<Carousel data={projects} />, document.getElementById('root'));
