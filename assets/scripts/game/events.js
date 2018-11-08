'use strict'
const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')

const onCreateGame = (event) => {
  event.preventDefault()
  $(event.target).trigger('reset')
  api.createGame()
    .then(ui.createGameSuccess)
    .catch(ui.failure)
}

const onGetGame = (event) => {
  event.preventDefault()
  const gameData = getFormFields(event.target)
  console.log(gameData)
  const gameId = gameData.game.id
  $(event.target).trigger('reset')
  if (gameId === '') {
    $('#game-board').html('Please enter an ID')
  } else {
    $('#game-board').addClass('hidden')
    // make a GET request with form data
    api.getGame(gameId)
    // display bookData to user
      .then(ui.getGameSuccess)
    // display error message if there is a problem
      .catch(ui.failure)
  }
}

const onShowAllGames = (event) => {
  event.preventDefault()
  const gameData = getFormFields(event.target)
  $(event.target).trigger('reset')
  // make a GET request with form data
  api.showAllGames(gameData)
  // display bookData to user
    .then(ui.showAllGamesSuccess)
  // display error message if there is a problem
    .catch(ui.failure)
}

module.exports = {
  onCreateGame,
  onGetGame,
  onShowAllGames
}
// const startGame = () => {
//   $('#board').show()
//   $('#end-game').removeClass('hidden')
//   $('#start-game').addClass('hidden')
// }
//
// const replay = () => {
//   $('#board').hide()
//   $('#start-game').removeClass('hidden')
//   $('#end-game').addClass('hidden')
// }
