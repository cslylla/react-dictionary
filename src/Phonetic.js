import React from "react";

import "./Phonetic.css";

export default function Phonetic(props){
    let url = props.phonetic.audio;
    let audioObj = new Audio(url);

    function play(event){
        event.preventDefault();
        audioObj.play();
    }

    return (
        <div className="Phonetic">
        <hr />   
        <h4><i className="fas fa-play-circle play" onClick={play} tabIndex="0" title="Play audio of phonetic"></i> {props.phonetic.text}</h4>
        </div>
       
    )
}