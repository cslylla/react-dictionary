import React, {useState} from "react";

import "./Dictionary.css";

export default function Dictionary(){
    let [keyword, setKeyword] = useState("");
    
    function search(event){
        event.preventDefault();
    }

    function handleKeywordChange(event){
        setKeyword(event.target.value)
        console.log(keyword);
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