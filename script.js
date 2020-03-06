
import GuessingGame from "./guessing.js";

window.addEventListener("DOMContentLoaded", function(){

    const guessing = document.getElementById("guessingGame");
    guessing.addEventListener('click', function(){
        const app = new GuessingGame(document.getElementById('canvas'));
    })



   
})


  
