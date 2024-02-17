
const randomNumber = Math.floor(Math.random() * 100 + 1);
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

// guess.onkeydown = playGame;
guess.addEventListener('keydown', playGame);

newGameButton.onclick = resetOnNewGame;

function playGame(e) {
    if (e.key === 'Enter') {
        // pega o que esta escrito
        const valorEscrito = e.target.value;

        // verificar se o numero digitado ja foi digitado. Se ja foi, nao incrementa tentativa nem adiciona na lista!!!!
        if (attemptsList.includes(' ' + valorEscrito) == true){ 
            e.target.value = null;
            textAnaliser.innerHTML = "You have already used " + valorEscrito + " before. Try another guess"
            return;
        }
        attemptsNumber++;
        attempts.innerHTML = attemptsNumber;
        attemptsList.push(' ' + valorEscrito);
        guesses.innerHTML = attemptsList;

        if (valorEscrito == randomNumber) {
            textAnaliser.innerHTML = "Congratulations!!!!!"
            e.target.disabled = true;
            return;
        } else {
            if (valorEscrito > randomNumber) { //imprimindo se o palpite foi muito baixo ou muito alto
                textAnaliser.innerHTML = "Your number is too high"
            } else {
                textAnaliser.innerHTML = "Your number is too low"
            }
            e.target.value = null; // valor que a pessoa digitou some da caixinha para nao atrapalhar a escrita do proximo
        }

        if(attemptsNumber == 10) {
            textAnaliser.innerHTML = "You have used 10 attempts. The correct number was " + randomNumber + " . Try again!"
            e.target.disabled = true;
        }
    }
}

function resetOnNewGame() {
    attemptsNumber = 0;
    attemptsList = [];
    attempts.innerHTML = 0;
    guesses.innerHTML = 0;
}