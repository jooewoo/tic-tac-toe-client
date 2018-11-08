'use strict'
const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')

const onCreateGame = (event) => {
  event.preventDefault()
  const gameData = getFormFields(event.target)
  $(event.target).trigger('reset')
  api.createGame(gameData)
    .then(ui.createGameSuccess)
    .catch(ui.failure)
}

const onGetGame = (event) => {
  event.preventDefault()
  const gameData = getFormFields(event.target)
  $(event.target).trigger('reset')
  api.getGame(gameData)
    .then(ui.getGameSuccess)
    .catch(ui.failure)
}

module.exports = {
  onCreateGame,
  onGetGame
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
