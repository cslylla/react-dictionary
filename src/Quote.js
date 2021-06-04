import React from "react";
import read2 from "./images/read2.svg"

import "./Quote.css";


export default function Quote(){

    let quotes =[
        "Be mindful when it comes to your words. A string of some that don't mean much to you, may stick with someone else for a lifetime.",
        "Be careful with your words. Once they are said, they can be only forgiven, not forgotten.",
        "Words are free. It's how you use them that may cost you.",
        "Raise your words, not your voice. It is rain that grows flowers, not thunder.",
        "...But the human tongue is a beast that few can master. It strains constantly to break out of its cage, and if it is not tamed, it will run wild and cause you grief.",
        "The secret of being boring is to say everything.",
        "One kind word can change someone's entire day.",
        "Handle them carefully, for words have more power than atom bombs.",
        "Words have energy and power with the ability to help, to heal, to hinder, to hurt, to harm, to humiliate, and to humble.",
        "My task, which I am trying to achieve is, by the power of the written word, to make you hear, to make you feel--it is, before all, to make you see.",
        "Kind words can be short and easy to speak, but their echoes are truly endless.",
        "The tongue has no bones, but is strong enough to break a heart. So be careful with your words.",
        "Be careful what you say. You can say something hurtful in ten seconds, but ten years later, the wounds are still there.",
        "All I need is a sheet of paper and something to write with, and then I can turn the world upside down.",
        "Don't mix bad words with your bad mood. You'll have many opportunities to change a mood, but you'll never get the opportunity to replace the words you spoke.",
        "Don't ever diminish the power of words. Words move hearts and hearts move limbs.",
        "Words are seeds that do more than blow around. They land in our hearts and not the ground. Be careful what you plant and careful what you say. You might have to eat what you planted one day.",
        "Words have no power to impress the mind without the exquisite horror of their reality.",
        "A broken bone can heal, but the wound a word opens can fester forever.",
        "Good words are worth much, and cost little.",
        "Your words have power. Speak words that are kind, loving, positive, uplifting, encouraging, and life-giving.",
        "Kind words are a creative force, a power that concurs in the building up of all that is good, and energy that showers blessings upon the world.",
        "No matter what anybody tells you, words and ideas can change the world.",
        "The best word shakers were the ones who understood the true power of words. They were the ones who could climb the highest.",
        "Speech has power. Words do not fade. What starts out as a sound, ends in a deed."
    ]
    function randomNumber(min, max){
        let number = Math.random()*(max-min) + min;
        return Math.floor(number);
    }

    return(
        <div className="Quote">
        <div className="quote">{quotes[randomNumber(1,26)]}</div>
        <img src={read2} alt="Reading woman drawing" className="img-fluid picture" />
        </div>
    );
}