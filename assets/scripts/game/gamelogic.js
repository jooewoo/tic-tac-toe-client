const store = require('../store.js')
// const config = require('../config.js')

const gameBoard = (id, value, over) => {
  if (over === true) {
    return
  }
  if (store.cells[id] === '') {
    store.cells[id] = value
    store.wrong = false
  } else if (store.cells[id] === 'x' || 'o') {
    store.wrong = true
  }
}

// Swaps player if they chose an unoccupied space
const switchPlayer = (playerSwap) => {
  if (store.wrong === true) {
    return
  }
  if (store.wrong === false) {
    const player = playerSwap === 'x' ? 'o' : 'x'
    store.player = player
    return store.player
  }
}

// Checks if the array has the winning/draw conditions
const winningConditions = (cellsBoard) => {
  if ((cellsBoard[0] === 'x' && cellsBoard[1] === 'x' && cellsBoard[2] === 'x') ||
      (cellsBoard[3] === 'x' && cellsBoard[4] === 'x' && cellsBoard[5] === 'x') ||
      (cellsBoard[6] === 'x' && cellsBoard[7] === 'x' && cellsBoard[8] === 'x') ||
      (cellsBoard[0] === 'x' && cellsBoard[3] === 'x' && cellsBoard[6] === 'x') ||
      (cellsBoard[1] === 'x' && cellsBoard[4] === 'x' && cellsBoard[7] === 'x') ||
      (cellsBoard[2] === 'x' && cellsBoard[5] === 'x' && cellsBoard[8] === 'x') ||
      (cellsBoard[0] === 'x' && cellsBoard[4] === 'x' && cellsBoard[8] === 'x') ||
      (cellsBoard[2] === 'x' && cellsBoard[4] === 'x' && cellsBoard[6] === 'x')) {
    store.player = 'x'
    store.over = true
    store.winner = 'x'
    store.eagles += 1
    $('#game-message').html('Eagles wins')
  } else if ((cellsBoard[0] === 'o' && cellsBoard[1] === 'o' && cellsBoard[2] === 'o') ||
            (cellsBoard[3] === 'o' && cellsBoard[4] === 'o' && cellsBoard[5] === 'o') ||
            (cellsBoard[6] === 'o' && cellsBoard[7] === 'o' && cellsBoard[8] === 'o') ||
            (cellsBoard[0] === 'o' && cellsBoard[3] === 'o' && cellsBoard[6] === 'o') ||
            (cellsBoard[1] === 'o' && cellsBoard[4] === 'o' && cellsBoard[7] === 'o') ||
            (cellsBoard[2] === 'o' && cellsBoard[5] === 'o' && cellsBoard[8] === 'o') ||
            (cellsBoard[0] === 'o' && cellsBoard[4] === 'o' && cellsBoard[8] === 'o') ||
            (cellsBoard[2] === 'o' && cellsBoard[4] === 'o' && cellsBoard[6] === 'o')) {
    store.player = 'x'
    store.over = true
    store.winner = 'o'
    store.patriots += 1
    $('#game-message').html('Partiots wins')
  } else if (cellsBoard[0] !== '' && cellsBoard[1] !== '' && cellsBoard[2] !== '' && cellsBoard[3] !== '' && cellsBoard[4] !== '' && cellsBoard[5] !== '' && cellsBoard[6] !== '' && cellsBoard[7] !== '' && cellsBoard[8] !== '') {
    store.player = 'x'
    store.over = true
    store.winner = 'draw'
    $('#game-message').html('It is a draw, no one wins. Please try again')
  }
}

module.exports = {
  gameBoard,
  switchPlayer,
  winningConditions
}
