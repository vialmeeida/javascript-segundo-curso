//Pegando um numero randomico
const randomNumber = Math.floor(Math.random() * 100);

console.log(randomNumber);

//pegando o palpite do jogador
let guess = document.getElementById('inputBox');
console.log(guess);

//pegando o numero de tentativas do jogador
let attempts = document.getElementById('attempts');

let attemptsNumber = 0;

let attemptsList = [];

//pegando os palpites do jogador]
let guesses = document.getElementById('guesses');

// guess.onkeydown = rodaCoisaQuandoTeclar;

 guess.addEventListener('keydown', rodaCoisaQuandoTeclar);

function rodaCoisaQuandoTeclar(e) {
    if (e.key === 'Enter') {
        // pega o que esta escrito
        const valorEscrito = e.target.value;
        console.log(valorEscrito);

        // verificar se o numero digitado ja foi digitado
        // se ja foi, nao incrementa tentativa nem adiciona na lista

        attemptsNumber++;
        attempts.innerHTML = attemptsNumber;
        attemptsList.push(valorEscrito);
        guesses.innerHTML = attemptsList;

        if (valorEscrito == randomNumber) {
            console.log("Venceu")
            e.target.disabled = true;
        } else {
            e.target.value = null; // valor que a pessoa digitou some
            //imprimir se eh muito baixo ou muito alto
        }
    }
}

//tem que zerar o jogo quando clicar em new game (funcaozinha zerar o jogo)