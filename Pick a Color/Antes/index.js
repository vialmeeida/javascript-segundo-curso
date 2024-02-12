let colors = ["red", "pink", "blue", "green", "grey", "black", "purple", "yellow", "orange"];

let verifyRandom;

let button = document.getElementById('btn');

button.onclick = changeColor;

function changeColor() {
    let needChanges = document.getElementsByTagName('body')[0];
    let randomNumber;
    do {
        randomNumber = Math.floor(Math.random() * colors.length);
        //Quando vc multiplica o math por um comprimento, ele gera numeros entre esse comprimento
        //O floor serve para pegar numeros inteiros 
    } while (randomNumber == verifyRandom)

    verifyRandom = randomNumber;
    
    needChanges.style.backgroundColor = colors[randomNumber];

    nameColor = colors[randomNumber]; 

    document.getElementById('color').innerHTML = nameColor;
}