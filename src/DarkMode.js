import React from "react";

import "./DarkMode.css";

export default function DarkMode(){
    let clickedClass = "clicked";
    const body = document.body;
    const footer = document.querySelectorAll("footer");
    const lightTheme = "light";
    const darkTheme = "dark";
    let theme;

    if (localStorage){
        theme = localStorage.getItem("theme");
    }

    if (theme === lightTheme || theme === darkTheme){
        body.classList.add(theme);
        footer.classList.add(theme);
    } else {
        body.classList.add(lightTheme);
        footer.classList.add(lightTheme);
    }


    const switchTheme = (e) => {
        if(theme === darkTheme){
            body.classList.replace(darkTheme, lightTheme);
            footer.classList.replace(darkTheme, lightTheme);
            e.target.classList.remove(clickedClass);
            localStorage.setItem("theme", "light");
            theme=lightTheme;
        } else{
            body.classList.replace(lightTheme, darkTheme);
            footer.classList.replace(lightTheme, darkTheme);
            e.target.classList.add(clickedClass);
            localStorage.setItem("theme", "dark");
            theme=darkTheme;

        }
    };

    return(
        <div className="DarkMode text-end">
        <button
            className={theme === "dark" ? clickedClass : ""}
            id="darkMode"
            onClick={(e)=>switchTheme(e)}>
        <i class="far fa-moon"></i>
        </button>
        </div>
    )
}
