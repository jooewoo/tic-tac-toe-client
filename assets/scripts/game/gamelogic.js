const store = require('../store.js')

const gameBoard = (id, value) => {
  if (store.cells[id] === '') {
    store.cells[id] = value
    console.log('nice job dumbass')
  } else if (store.cells[id] === 'x' || 'o') {
    console.log('Spot is taken, try again')
  } else if (store.games.game.over === true) {
    $('.box').off('click')
  }
}

const switchPlayer = (playerSwap) => {
  const player = playerSwap === 'x' ? 'o' : 'x'
  store.player = player
  return store.player
}

const winningConditions = (cellsBoard) => {
  if ((cellsBoard[0] === 'x' && cellsBoard[1] === 'x' && cellsBoard[2] === 'x') ||
(cellsBoard[3] === 'x' && cellsBoard[4] === 'x' && cellsBoard[5] === 'x') ||
(cellsBoard[6] === 'x' && cellsBoard[7] === 'x' && cellsBoard[8] === 'x') ||
(cellsBoard[0] === 'x' && cellsBoard[3] === 'x' && cellsBoard[6] === 'x') ||
(cellsBoard[1] === 'x' && cellsBoard[4] === 'x' && cellsBoard[7] === 'x') ||
(cellsBoard[2] === 'x' && cellsBoard[5] === 'x' && cellsBoard[8] === 'x') ||
(cellsBoard[0] === 'x' && cellsBoard[4] === 'x' && cellsBoard[8] === 'x') ||
(cellsBoard[2] === 'x' && cellsBoard[4] === 'x' && cellsBoard[6] === 'x')) {
    console.log('X wins')
    store.player = 'x'
  } else if ((cellsBoard[0] === 'o' && cellsBoard[1] === 'o' && cellsBoard[2] === 'o') ||
(cellsBoard[3] === 'o' && cellsBoard[4] === 'o' && cellsBoard[5] === 'o') ||
(cellsBoard[6] === 'o' && cellsBoard[7] === 'o' && cellsBoard[8] === 'o') ||
(cellsBoard[0] === 'o' && cellsBoard[3] === 'o' && cellsBoard[6] === 'o') ||
(cellsBoard[1] === 'o' && cellsBoard[4] === 'o' && cellsBoard[7] === 'o') ||
(cellsBoard[2] === 'o' && cellsBoard[5] === 'o' && cellsBoard[8] === 'o') ||
(cellsBoard[0] === 'o' && cellsBoard[4] === 'o' && cellsBoard[8] === 'o') ||
(cellsBoard[2] === 'o' && cellsBoard[4] === 'o' && cellsBoard[6] === 'o')) {
    console.log(' wins')
    store.player = 'x'
  } else if (cellsBoard[0] !== '' && cellsBoard[1] !== '' && cellsBoard[2] !== '' && cellsBoard[3] !== '' && cellsBoard[4] !== '' && cellsBoard[5] !== '' && cellsBoard[6] !== '' && cellsBoard[7] !== '' && cellsBoard[8] !== '') {
    console.log('Draw')
    store.player = 'x'
  }
}

module.exports = {
  gameBoard,
  switchPlayer,
  winningConditions
}
