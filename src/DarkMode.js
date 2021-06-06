import React from "react";

import "./DarkMode.css";

export default function DarkMode(){
    let clickedClassName = "clicked";
    const body = document.body;
    const lightTheme = "light";
    const darkTheme = "dark";
    let theme;

    if (localStorage){
        theme = localStorage.getItem("theme");
    }

    if (theme === lightTheme || theme === darkTheme){
        body.classList.add(theme);
    } else {
        body.classList.add(lightTheme);
    }


    const switchTheme = (e) => {
        if(theme === darkTheme){
            body.classList.replace(darkTheme, lightTheme);
            e.target.classList.remove(clickedClassName);
            localStorage.setItem("theme", "light");
            theme=lightTheme;
        } else{
            body.classList.replace(lightTheme, darkTheme);
            e.target.classList.add(clickedClassName);
            localStorage.setItem("theme", "dark");
            theme=darkTheme;

        }
    };

    return(
        <div className="DarkMode text-end">
        <button
            className={theme === "dark" ? clickedClassName : ""}
            id="darkMode"
            onClick={(e)=>switchTheme(e)}>
        <i className="far fa-moon"></i>
        </button>
        </div>
    )
}
