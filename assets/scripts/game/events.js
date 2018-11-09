'use strict'
// {"game":{"id":2433,"cells":["","","","","","","","",""],"over":false,"player_x":{"id":407,"email":"1111"},"player_o":null}}
const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')
const store = require('../store.js')

const onCreateGame = (event) => {
  event.preventDefault()
  api.createGame()
    .then(ui.createGameSuccess)
    .catch(ui.failure)
}

const onGetGame = (event) => {
  event.preventDefault()
  const gameData = getFormFields(event.target)
  const gameId = gameData.game.id
  $(event.target).trigger('reset')
  if (gameId === '') {
    $('#game-board').html('Please enter an ID')
  } else {
    $('#game-board').addClass('hidden')
    api.getGame(gameId)
      .then(ui.getGameSuccess)
      .catch(ui.failure)
  }
}

const onShowAllGames = (event) => {
  event.preventDefault()
  const gameData = getFormFields(event.target)
  $(event.target).trigger('reset')
  api.showAllGames(gameData)
    .then(ui.showAllGamesSuccess)
    .catch(ui.failure)
}

// game was advised to always start with x
let player = 'x'

const onUpdateMove = (event) => {
  const index = event.target.id
  const value = player
  store.gameBoard[index] = player
  api.updateMove(index, value)
    .then(ui.updateMoves)
    .catch(ui)
}

module.exports = {
  onCreateGame,
  onGetGame,
  onShowAllGames,
  onUpdateMove
}