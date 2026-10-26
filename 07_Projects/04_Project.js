const randomNumber = parseInt(Math.random() * 100) + 1;


const submitButton = document.querySelector('#subt')
const userInput = document.querySelector('#guessfield')

const guessslot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastresult')

const lowOrHi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p')

let prevGuesses = []
let numGuesses = 1

let playGame = true

if (playGame) {
    submitButton.addEventListener('click',function(e){
        e.preventDefault()
        const guess = parseInt(userInput.value)
        validateGuess(guess)
    })
}

function validateGuess(guess) {
    if(isNaN(guess)) {
        alert('Please enter a valid number')
    } else if(guess < 1){
        alert('Please enter a number greater than 0')   
    } else if(guess >= 100) {
        alert('Please enter a number less than 101')
    } else {
        prevGuesses.push(guess)
        if(numGuesses === 11){
            displayGuess(guess)
            displaymessage(`Game Over! The number was ${randomNumber}`)
            endGame()
        } else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess) {
    if(guess === randomNumber) {
        displaymessage(`Congratulations! You guessed the number in ${numGuesses}guesses!`)
        endGame()
    } else if(guess < randomNumber) {
        displaymessage('Last guess was too low!')
    } else {
        displaymessage('Last guess was too high!')  
    }  
    
}

function displayGuess(guess) {
    userInput.value = ''
    guessslot.innerHTML += `${guess} `
    numGuesses++
    remaining.innerHTML = `${11 - numGuesses} guesses remaining`

}

function displaymessage(message) {
    lowOrHi.innerHTML = `<h1>${message}</h1>`
}

function endGame() {
    inputValue = ''
    userInput.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML = `<h1 id="newGame">Start New Game</h1>`
    startOver.appendChild(p)
    playGame = false
    newGame()
}

function newGame() {
    document.querySelector('#newGame').addEventListener('click', function(e){
        randomNumber = parseInt(Math.random() * 100) + 1
        prevGuesses = []
        numGuesses = 1
        guessslot.innerHTML = ''
        remaining.innerHTML = `${11 - numGuesses} guesses remaining`
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)
        playGame = true

    
    })
}








