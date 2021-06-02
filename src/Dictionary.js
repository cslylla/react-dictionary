import React, {useState} from "react";
import axios from "axios";

import "./Dictionary.css";

export default function Dictionary(){
    let [keyword, setKeyword] = useState("");
    
    function handleResponse(response){
        console.log(response.data[0]);
    }
    
    function search(event){
        event.preventDefault();
        let apiUrl =`https://api.dictionaryapi.dev/api/v2/entries/en_GB/${keyword}`;
        axios.get(apiUrl).then(handleResponse);
    }

    function handleKeywordChange(event){
        setKeyword(event.target.value)
    }

    return(
        <div className="Dictionary">
        <form onSubmit={search}>
        <div className="row">
        <div className="col-md-8">
            <input type="search" autoFocus={true} autoComplete="off" placeholder="Search for a word" onChange={handleKeywordChange} className="searchBar"/>
        </div>
        <div className="col-md-4">
            <input type="submit" value="Search" className="searchButton"/>
        </div>
        </div>  
        </form>
        </div>
    )
}