//NOTE: My resolution is 1920x1080 and Pedro was "disappearing" before colliding with the actual border. 
//To avoid that, I shrinked the borders by a few pixels, although that might stop him before reaching the 
//borders on devices with different resolutions.

//initializes variables

const character = document.getElementsByClassName("character")[0];
const containerCharacter = document.getElementsByClassName("container-character")[0];

//defines Pedro's speed
const VELOCITY = 10;

//defines the width and height of the screen as variables. They're used later  
const SCREEN_WIDTH = screen.width;
const SCREEN_HEIGHT = screen.height;

//defines Pedro's initial position 

let xPosition = 500;
let yPosition = 300;

const keysAvaiable = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"]
const directions = ["turnUp", "turnLeft", "turnRight", "turnDown"];

//movement controls

window.addEventListener("keydown", (event) => {
    
    //detects pressed keys
    
    const key  = event.key;

    const keyPressedAvaiable =  keysAvaiable.some((currentKey) => {
        return currentKey === key;
    })

    if(!keyPressedAvaiable) return;

    directions.forEach((direction) => {
        if(character.classList.contains(direction)) character.classList.remove(direction);
    })

    //conditions movement to key being pressed

    if(key === "ArrowUp") {
        character.classList.add("turnUp");
        //conditions movement to proximity to screen border (collision)
        if(yPosition > 0){
            yPosition -= VELOCITY;  
        }  
    }

    if(key === "ArrowDown"){
        character.classList.add("turnDown");
        if(yPosition < SCREEN_HEIGHT - 75) {
            yPosition += VELOCITY;
        }
    }

    if(key === "ArrowLeft"){
        character.classList.add("turnLeft");
        if(xPosition > -25){
            xPosition -= VELOCITY;  
        } 
    }

    if(key === "ArrowRight"){
        character.classList.add("turnRight");
        if(xPosition < SCREEN_WIDTH - 75) {
            xPosition += VELOCITY;
        }
    }

    containerCharacter.style.top = `${yPosition}px`;
    containerCharacter.style.left = `${xPosition}px`;
});
