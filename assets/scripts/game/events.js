'use strict'
// {"game":{"id":2433,"cells":["","","","","","","","",""],"over":false,"player_x":{"id":407,"email":"1111"},"player_o":null}}
const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')
const store = require('../store.js')
const gameLogic = require('./gamelogic.js')

// In the event that user clicks new game, contacts API for new game data
const onCreateGame = (event) => {
  event.preventDefault()
  api.createGame()
    .then(ui.createGameSuccess)
    .catch(ui.failure)
}

// In the event that user clicks get game, contacts API for specific game ID data
const onGetGame = (event) => {
  event.preventDefault()
  const gameData = getFormFields(event.target)
  // the unique game ID so you can access it later
  $(event.target).trigger('reset')
  if (gameData === '') {
    $('#game-message').html('Please enter an ID')
  } else {
    $('#game-message').addClass('hidden')
    api.getGame(gameData)
      .then(ui.getGameSuccess)
      .catch(ui.failure)
  }
}

// In the event that user clicks all game, contacts API for all the game data
const onShowAllGames = (event) => {
  event.preventDefault()
  $(event.target).trigger('reset')
  api.showAllGames()
    .then(ui.showAllGamesSuccess)
    .catch(ui.failure)
}

// In the event that user clicks on the board, contacts API to update game data
const onUpdateMove = (event) => {
  const value = store.player
  const id = $(event.target).data().cellIndex
  const over = store.over
  const winner = store.winner
  api.updateMove(id, value, over)
    .then(ui.updateMoves(id, value, over, winner))
    .catch(ui.failure)
  gameLogic.gameBoard(id, value, over)
  gameLogic.switchPlayer(value)
  gameLogic.winningConditions(store.cells)
  // console.log(store.cells)
  // console.log(store)
}

module.exports = {
  onCreateGame,
  onGetGame,
  onShowAllGames,
  onUpdateMove
}
