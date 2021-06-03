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
        <h3><i className="fas fa-play-circle play" onClick={play} tabIndex="0"></i> {props.phonetic.text}</h3>
        </div>
       
    )
}