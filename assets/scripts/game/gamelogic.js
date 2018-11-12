const store = require('../store.js')

const gameBoard = (id, value, over) => {
  if (over === true) {
    return
  }
  if (store.cells[id] === '') {
    store.cells[id] = value
    store.wrong = false
    console.log('nice job')
  } else if (store.cells[id] === 'x' || 'o') {
    console.log('Spot is taken, try again')
    store.wrong = true
  }
}

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

// const winningConditions = (cellsBoard) => {
//   const winnerX =
//     (cellsBoard[0] === 'x' && cellsBoard[1] === 'x' && cellsBoard[2] === 'x') ||
//     (cellsBoard[3] === 'x' && cellsBoard[4] === 'x' && cellsBoard[5] === 'x') ||
//     (cellsBoard[6] === 'x' && cellsBoard[7] === 'x' && cellsBoard[8] === 'x') ||
//     (cellsBoard[0] === 'x' && cellsBoard[3] === 'x' && cellsBoard[6] === 'x') ||
//     (cellsBoard[1] === 'x' && cellsBoard[4] === 'x' && cellsBoard[7] === 'x') ||
//     (cellsBoard[2] === 'x' && cellsBoard[5] === 'x' && cellsBoard[8] === 'x') ||
//     (cellsBoard[0] === 'x' && cellsBoard[4] === 'x' && cellsBoard[8] === 'x') ||
//     (cellsBoard[2] === 'x' && cellsBoard[4] === 'x' && cellsBoard[6] === 'x')
//
//   const winnerO =
//     (cellsBoard[3] === 'o' && cellsBoard[4] === 'o' && cellsBoard[5] === 'o') ||
//     (cellsBoard[6] === 'o' && cellsBoard[7] === 'o' && cellsBoard[8] === 'o') ||
//     (cellsBoard[0] === 'o' && cellsBoard[3] === 'o' && cellsBoard[6] === 'o') ||
//     (cellsBoard[1] === 'o' && cellsBoard[4] === 'o' && cellsBoard[7] === 'o') ||
//     (cellsBoard[2] === 'o' && cellsBoard[5] === 'o' && cellsBoard[8] === 'o') ||
//     (cellsBoard[0] === 'o' && cellsBoard[4] === 'o' && cellsBoard[8] === 'o') ||
//     (cellsBoard[2] === 'o' && cellsBoard[4] === 'o' && cellsBoard[6] === 'o')
//
//   const draw = (cellsBoard[0] !== '' && cellsBoard[1] !== '' && cellsBoard[2] !== '' && cellsBoard[3] !== '' && cellsBoard[4] !== '' && cellsBoard[5] !== '' && cellsBoard[6] !== '' && cellsBoard[7] !== '' && cellsBoard[8] !== '')
//
//
//   winnerX ? (
//   console.log('X wins'),
//   store.player = 'x'
//   ) :
//   winnerO ? (
//   console.log(' wins'),
//     store.player = 'x'
//   ) : draw (
//     console.log('Draw'),
//     store.player = 'x',
//     store.over = true
//   )
// }

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
  } else if (cellsBoard[0] !== '' && cellsBoard[1] !== '' && cellsBoard[2] !== '' && cellsBoard[3] !== '' && cellsBoard[4] !== '' && cellsBoard[5] !== '' && cellsBoard[6] !== '' && cellsBoard[7] !== '' && cellsBoard[8] !== '') {
    store.player = 'x'
    store.over = true
    store.winner = 'draw'
  }
}

const gameOver = () => {
  if (store.over === true) {
    if (store.winner === 'x') {
      console.log('x wins')
    } else if (store.winner === 'o') {
      console.log('o wins')
    } else if (store.winner === 'draw') {
      console.log('its a draw')
    }
  }
}

module.exports = {
  gameBoard,
  switchPlayer,
  winningConditions,
  gameOver
}
