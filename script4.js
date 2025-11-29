const random=parseInt(Math.random()*100+1)

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p=document.createElement('p')

let prevGuess=[]
let numGuess=1

let playGame=true

if(playGame){
    submit.addEventListener('click',(e)=>{
        e.preventDefault()
        const num=parseInt(userInput.value)
        validateGuess(num)
    })
}

const validateGuess=(num)=>{
    if (isNaN(num)) {
        alert('PLease enter a valid number');
    } else if (num < 1) {
        alert('PLease enter a number more than 1');
    } else if (num > 100) {
        alert('PLease enter a  number less than 100');
    } else {
        prevGuess.push(num)
        if(numGuess==11){
            displayGuess(num)
            displayMessage(`Game Over. Random number was ${random}`)
            endGame()
        }else{
            checkGuess(num)
            displayGuess(num)
        }
    }
}

const checkGuess=(num)=>{
    if(num===random){
        displayMessage("You Won.")
        endGame()
    }else if(num>random){
        displayMessage("Number is Too high")
    }else{
        displayMessage("Number is Too low")
    }
}

const displayGuess=(num)=>{
    userInput.value=''
    guessSlot.innerHTML+=`${num} , `
    numGuess++;
    remaining.innerHTML=`${11-numGuess}`
}

const displayMessage=(msg)=>{
    lowOrHi.innerHTML=`<h2>${msg}</h2>`
}

const newGame=()=>{
    userInput.value=''
    userInput.setAttribute('disabled','')
    p.classList.add('button')
    p.innerHTML=`<h2 id="newGame">Start new Game</h2>`
    startOver.appendChild(p)
    playGame=false
    newGame()
}

const endGame=()=>{
    const newGameBtn=document.querySelector('#newGame')
    newGameBtn.addEventListener('click',(e)=>{
        random=parseInt(Math.random()*100+1)
        prevGuess=[]
        numGuess=1
        guessSlot.innerHTML=''
        remaining.innerHTML=`${11-numGuess}`
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)

        playGame=true
    })
}