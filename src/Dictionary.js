import React, {useState} from "react";
import axios from "axios";
import Results from "./Results";

import "./Dictionary.css";

export default function Dictionary(){
    let [keyword, setKeyword] = useState("");
    let [results, setResults] = useState(null);
    
    function handleResponse(response){
        setResults(response.data[0]);
    }
    
    function search(event){
        event.preventDefault();

        //documentation: https://dictionaryapi.dev/
        let apiUrl =`https://api.dictionaryapi.dev/api/v2/entries/en_GB/${keyword}`;
        axios.get(apiUrl).then(handleResponse);
    }

    function handleKeywordChange(event){
        setKeyword(event.target.value)
    }

    return(
        <div className="Dictionary">
        <div className="searchCard">   
        <form onSubmit={search}>
        <div className="row">
        <div className="col-md-8">
            <input type="search" autoFocus={true} autoComplete="off" placeholder="Search for a word" onChange={handleKeywordChange} className="searchBar"/>
        </div>
        <div className="col-md-4">
            <input type="submit" value="Search" className="searchButton" title="Search"/>
        </div>
        </div>  
        </form>
        </div> 
        <Results results={results}/>
        </div>
        
    )
}