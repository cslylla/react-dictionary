import React, {useState} from "react";
import axios from "axios";
import Results from "./Results";
import Quote from "./Quote";



import "./Dictionary.css";

export default function Dictionary(){
    let [keyword, setKeyword] = useState("");
    let [results, setResults] = useState(null);
    let [loaded, setLoaded]= useState(false);
    let [photos, setPhotos]= useState(null);
    
    function handleDictionaryResponse(response){
        setResults(response.data[0]);
    }

    function handlePexelsResponse(response){
        setPhotos(response.data.photos);
    }

    function search(){
        //documentation: https://dictionaryapi.dev/
        let apiUrl =`https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
        axios.get(apiUrl).then(handleDictionaryResponse);

        //documentation:https://www.pexels.com/api/documentation/#photos-overview
        let pexelsApiKey="563492ad6f9170000100000161560b4d4aac4f23a10eaa5c4372d9e3";
        let pexelsApiUrl=`https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
        let headers={Authorization: `Bearer ${pexelsApiKey}`}
        axios.get(pexelsApiUrl, {headers:headers}).then(handlePexelsResponse);
    }
    
    function handleSubmit(event){
        event.preventDefault();
        setLoaded(true);
        search();
    }

    function handleKeywordChange(event){
        setKeyword(event.target.value)
    }
    let show=null;
    if (loaded){
        show=(  <Results results={results} photos={photos} alt={keyword}/>)
    } else {
        show=(<Quote />);
    }

     return(
            <div className="Dictionary">
            <section>
            <h2>What word do you want to look up?</h2>   
            <form onSubmit={handleSubmit}>
            <div className="row">
            <div className="col-md-8">
                <input type="search" autoFocus={true} autoComplete="off" placeholder="Search for a word" onChange={handleKeywordChange} className="searchBar"/>
            </div>
            <div className="col-md-4">
                <input type="submit" value="Search" className="searchButton" title="Search"/>
            </div>
            </div>  
            </form>
            </section> 
            {show}
            </div>
        )
    
}