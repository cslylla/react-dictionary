import React from "react";
import Meaning from "./Meaning";
import "./Results.css";

export default function Results(props){
    if (props.results){
    return(
        <div className="Results">
        <div className="resultCard">
        <h2>{props.results.word}</h2>
        <h3>{props.results.phonetics[0].text}</h3>
        </div>
        {props.results.meanings.map(function(meaning, index){
            return(
                <div className="resultCard" key={index}>
                <Meaning meaning={meaning}/>
                </div>
            )
        })}
                
        </div>
    )
    } else {
        return null;
    }
    
}