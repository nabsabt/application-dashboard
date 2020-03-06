/*
base class for applications
*/
import Application from './application.js';

export class GuessingGame extends Application{

    constructor(canvas){
        super(canvas);
    }
    initialize(){
        var number = Math.floor(Math.random() * 100);

        canvas.appendChild(document.createElement('h1'));
        canvas.children[0].textContent = "Welcome to the guessing game";
        this.canvas.children[0].style.textAlign="center";

        canvas.appendChild(document.createElement('p'));
        canvas.children[1].textContent = "Guess a number from 0 to 100";
        this.canvas.children[1].style.textAlign="center";

        var x = document.createElement('INPUT');
        x.setAttribute("type", "text");
        canvas.appendChild(x);
        this.canvas.children[2].style.marginLeft="42%";

        canvas.appendChild(document.createElement('button'));
        canvas.children[3].style = "width: 40px; height:30px;";
        canvas.children[3].style.textAlign="center";
        canvas.children[3].textContent = "send";
        canvas.children[3].addEventListener('click', function(){
            if(parseInt(x.value)>= 100 || parseInt(x.value)<=0){
                alert("You gave a too high or low number baszod");
                x.value = null;

            } else{
                canvas.appendChild(document.createElement('p'));
                canvas.children[4].textContent = "Your guess is " +parseInt(x.value) ;
                canvas.children[4].style.textAlign="center";

                canvas.appendChild(document.createElement('p'));
                canvas.children[5].textContent = "The correct number is "+number;
                canvas.children[5].style.textAlign="center";

                if(parseInt(x.value)==number){
                    alert("It's a MATCH!!");
                } else {
                    alert("Not match!");
                }
            }

        

        })

        



    }

    draw(){

    }
}

export default GuessingGame;