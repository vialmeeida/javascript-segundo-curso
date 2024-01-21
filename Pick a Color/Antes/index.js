let colors = ["red", "pink", "blue", "green", "grey", "black", "purple", "yellow", "orange"];

let verifyRandom;

let button = document.getElementById('btn');

button.onclick = changeColor;

function changeColor() {
    let needChanges = document.getElementsByTagName('body')[0];
    let randomNumber;
    do {
        randomNumber = Math.floor(Math.random() * colors.length);
    } while (randomNumber == verifyRandom)

    verifyRandom = randomNumber;
    
    needChanges.style.backgroundColor = colors[randomNumber];

    nameColor = colors[randomNumber]; 

    document.getElementById('color').innerHTML = nameColor;
}