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
                    <p>{definition.definition}</p>
                    <hr />
                    <p>Example: <em>"{definition.example}"</em></p>
                    </div> 
                    
                )
            })}
            
            
        </div>
    )
}