const squares = document.querySelectorAll('.square')
const mole = document.querySelector('.in-mole')
const score = document.querySelector('#score')
const time = document.querySelector('#time-left')

let result = 0
let position
let currentTime = 60
let counter = null

function randomSquare() {
    squares.forEach(square => {
        square.classList.remove('in-mole')
    })

    let randomPosition = squares[Math.floor(Math.random() * 9)]
    randomPosition.classList.add('in-mole')

    position = randomPosition.id
}

squares.forEach(square => {
    square.addEventListener('mousedown', () => {
        if (square.id == position) {
            result++;
            score.textContent = result
            position = null
        }
    })
    
}) 

function moveMole() {
    
    counter = setInterval(randomSquare,1000)
}

moveMole()

function countDown() {
    currentTime = currentTime - 1
    time.textContent = currentTime

    if (currentTime == 0) {
        clearInterval(countDownTimer)
        clearInterval(counter)
        alert(`Time over, your final score is ${result}`)
    }

}

let countDownTimer =  setInterval(countDown,1000)