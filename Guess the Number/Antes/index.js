//Pegando um numero randomico
const randomNumber = Math.floor(Math.random() * 100);

console.log(randomNumber);

//pegando o palpite do jogador
let guess = document.getElementById('inputBox');

//pegando o numero de tentativas do jogador
let attempts = document.getElementById('attempts');

let attemptsNumber = 0;

let attemptsList = [];

let textAnaliser = document.getElementById("textOutput");

//pegando os palpites do jogador
let guesses = document.getElementById('guesses');

// guess.onkeydown = rodaCoisaQuandoTeclar;

guess.addEventListener('keydown', playGame);

function playGame(e) {
    if (e.key === 'Enter') {
        // pega o que esta escrito
        const valorEscrito = e.target.value;
        console.log(valorEscrito);

        // verificar se o numero digitado ja foi digitado. Se ja foi, nao incrementa tentativa nem adiciona na lista!!!!

        newGameButton.onclick = resetOnNewGame;

        attemptsNumber++;
        attempts.innerHTML = attemptsNumber;
        attemptsList.push(valorEscrito);
        guesses.innerHTML = attemptsList;

        if (valorEscrito == randomNumber) {
            textAnaliser.innerHTML = "Congratulations!!!!!"
            e.target.disabled = true;
        } else {
            if (valorEscrito > randomNumber) { //imprimindo se o palpite foi muito baixo ou muito alto
                textAnaliser.innerHTML = "Your number is too high"
            } else {
                textAnaliser.innerHTML = "Your number is too low"
            }
            e.target.value = null; // valor que a pessoa digitou some da caixinha para nao atrapalhar a escrita do proximo
        }
    }
}

//function verifyGuessIsNew(number){
    
function resetOnNewGame() {
    attemptsNumber = 0;
    attemptsList = [];
    attempts.innerHTML = 0;
    guesses.innerHTML = 0;
}