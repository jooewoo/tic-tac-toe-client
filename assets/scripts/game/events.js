const startGame = () => {
  $('#board').show()
  $('#end-game').removeClass('hidden')
  $('#start-game').addClass('hidden')
}

const replay = () => {
  $('#board').hide()
  $('#start-game').removeClass('hidden')
  $('#end-game').addClass('hidden')
}

// const player1 = 'X'
// const player2 = 'O'

console.log(startGame)
console.log(replay)
