const startBtn = document.getElementById('startBtn')
const resetBtn = document.getElementById('resetBtn')
const playerOnePick = document.querySelector('.playerOne')
const playerTwoPick = document.querySelector('.playerTwo')
const playerOneScore = document.getElementById('playerOneScore')
const playerTwoScore = document.getElementById('playerTwoScore')

let alive = true

currentScorePlayerOne = 0
currentScorePlayerTwo = 0

startBtn.addEventListener("click", () => {
    if (alive) {
        loadingPick()
        setTimeout(startGame, 1000)
    }
})

resetBtn.addEventListener('click', () => {
    alive = true
    currentScorePlayerOne = 0
    currentScorePlayerTwo = 0
    playerOneScore.textContent = `Score: 0`
    playerTwoScore.textContent = `Score: 0`
    playerOnePick.textContent = "--"
    playerTwoPick.textContent = "--"
    playerOnePick.style.visibility = 'visible'
    playerTwoPick.style.visibility = 'visible'
})

function loadingPick() {
    playerOnePick.textContent = "..."
    playerTwoPick.textContent = "..."
}

function startGame() {
    const randomItems = ["Rock", "Paper", "Scissor"]

    let playerOneCard = randomItems[Math.floor(Math.random() * randomItems.length)]
    let playerTwoCard = randomItems[Math.floor(Math.random() * randomItems.length)]

    playerOnePick.textContent = `${playerOneCard}`
    playerTwoPick.textContent = `${playerTwoCard}`

    // Adding score
    if (playerOneCard == "Rock" && playerTwoCard == "Paper") {
        currentScorePlayerTwo++
        playerTwoScore.textContent = `Score: ${currentScorePlayerTwo}`
    } 
    else if (playerOneCard == "Paper" && playerTwoCard == "Rock") {
        currentScorePlayerOne++
        playerOneScore.textContent = `Score: ${currentScorePlayerOne}`
    } 
    else if (playerOneCard == "Rock" && playerTwoCard == "Scissor") {
        currentScorePlayerOne++
        playerOneScore.textContent = `Score: ${currentScorePlayerOne}`
    } 
    else if (playerOneCard == "Scissor" && playerTwoCard == "Rock") {
        currentScorePlayerTwo++
        playerTwoScore.textContent = `Score: ${currentScorePlayerTwo}`
    } 
    else if (playerOneCard == "Paper" && playerTwoCard == "Scissor") {
        currentScorePlayerTwo++
        playerTwoScore.textContent = `Score: ${currentScorePlayerTwo}`
    } 
    else if (playerOneCard == "Scissor" && playerTwoCard == "Paper") {
        currentScorePlayerOne++
        playerOneScore.textContent = `Score: ${currentScorePlayerOne}`
    } 
    else {
        // Tie
        console.log('Tie')
    }
    
    // Winner Condition
    if (currentScorePlayerOne == 3) {
        alive = false
        playerOnePick.textContent = `Winner`
        playerTwoPick.style.visibility = 'hidden'
    }
    if (currentScorePlayerTwo == 3) {
        alive = false
        playerTwoPick.textContent = `Winner`
        playerOnePick.style.visibility = 'hidden'
    }
    console.log(alive)
}