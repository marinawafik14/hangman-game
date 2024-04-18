//letters
const letters = "abcdefghijklmnopqrstuvwxyz";

//Get array from letters
let lettersArray = Array.from(letters);

// select leeters container
let lettersContainer = document.querySelector(".letters");

//Generate letters
lettersArray.forEach(letter => {

    //create span
    let span = document.createElement("span");

    //create textNode to letter
    let theLetter = document.createTextNode(letter);

// append textNode to span
span.appendChild(theLetter);

// add class to span
span.className ="letter-box";

// append span to letterContainer
lettersContainer.appendChild(span);
});


//object of words + categories
const words ={
programming : ["php" , "javascribt" , "go", "scala" , "fortran" , "r" , "mysql" ,"python"],
movies : ["prestige" , "inception" , "parasite" , "interstellar" , "whiplash" , "memento" , "coco" , "up"],
people :["Albert Einstein" , "Hitchcock " , "Alexander" , "Cleopatra" , "Mahatma Ghandi"],
countries :["Syria" ,"Palestine" , "Yemen" , "Egypt" , "Bahrain" , "Qatar"]

}

//Get random property
let allKeys = Object.keys(words);

// random number depends on keys lenght
let randomProNumber = Math.floor(Math.random() * allKeys.length)

//category
let randomProName = allKeys[randomProNumber];

// category word
let randomPropValue = words[randomProName];

//random number depends on word
let randomValueNumber = Math.floor(Math.random() * randomPropValue.length);

//the chosen word
let randomValueValue = randomPropValue[randomValueNumber]

//set category info
document.querySelector(".game-info .category span").innerHTML = randomProName;

// Select Letters Guess Element
let lettersGuessContainer = document.querySelector(".letters-guess");

//convert chosen word to array

let lettersAndSpace = Array.from(randomValueValue);

//create span depends on words
lettersAndSpace.forEach(letter =>{
//create span
let emptySpan = document.createElement("span");

// if letters contain space
if (letter === ' ') {
    //add class to span
    emptySpan.className = "with-space";
}

//append span to the letters guess container
lettersGuessContainer.appendChild(emptySpan);

});

//select guess span
let guessSpans = document.querySelectorAll(".letters-guess span");

// set wrong attempts
let wrongAttempts = 0;

//select the draw element
let theDraw = document.querySelector(".hangman-draw")

//handle clicking on letters
document.addEventListener("click", (e) =>{

//set the choosen status
let theStatus = false;

 if (e.target.className === "letter-box") {
    
    e.target.classList.add("clicked");


// get the clicked letter
let theClickedLetter = e.target.innerHTML; 


 //the chosen word
let theChossenWord = Array.from(randomValueValue);


theChossenWord.forEach((wordLetter , wordindex) =>{

    // if  the clicked letter equal to word letter
    if (theClickedLetter == wordLetter) {

        // correct status to true
        theStatus = true;
        

//loop on all guess spans
guessSpans.forEach((span, indexSpan) =>{

if (wordindex == indexSpan) {
    span.innerHTML = theClickedLetter;


}

});


    }

   
});
//outsite loop

// if letters is wrong
if (theStatus !== true) {
    
// incrase the wrong attempts
wrongAttempts++;

 // add class wrong on the draw element
 theDraw.classList.add(`wrong-${wrongAttempts}`)

// play fail sound
document.getElementById("fail").play();

if (wrongAttempts === 8) {
    
 endGame();
 // add class finished
lettersContainer.classList.add("finished")


}

}else{
    
       
  // play sucess sound
  document.getElementById("sucess").play();

// add class congrate

    sucessGame(); 

}

 }

});

function endGame(){

//create div
let div = document.createElement("div");

// create text
let divText = document.createTextNode(`Game over , the word is ${randomValueValue}`);
//append text to div
div.appendChild(divText);
//add class on div
div.className = "popup";
//append to the body
document.body.appendChild(div)

}

function sucessGame(){
//create div
let divElement = document.createElement("div");

// create text
let divTextElement = document.createTextNode(`congratulations `);
//append text to div
divElement.appendChild(divTextElement);
//add class on div
divElement.className = "congrate";

//append to the body
document.body.appendChild(divElement);



}