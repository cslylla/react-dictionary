import React from "react";

import "./Meaning.css"

export default function Meaning(props){
    console.log(props.meaning);
    return(
        <div className="Meaning">
            <h3><strong>{props.meaning.partOfSpeech}</strong></h3>
            {props.meaning.definitions.map(function(definition, index){
                return(
                    <div key={index}>
                    <hr />
                    <p><strong>Definition: </strong>{definition.definition}</p>
                    <p><strong>Example:</strong> <em>"{definition.example}"</em></p>
                    </div> 
                    
                )
            })}
            
            
        </div>
    )
}