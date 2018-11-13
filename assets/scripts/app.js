'use strict'
const authEvents = require('./auth/events.js')
const gameEvents = require('./game/events.js')

$(() => {
  $('#sign-up-form').on('submit', authEvents.onSignUp)
  $('#sign-in-form').on('submit', authEvents.onSignIn)
  $('#change-password-form').on('submit', authEvents.onChangePassword)
  $('#sign-out-button').on('click', authEvents.onSignOut)

  $('#start-game-button').on('click', gameEvents.onCreateGame)
  $('#previous-game').on('submit', gameEvents.onGetGame)
  $('#show-games-button').on('click', gameEvents.onShowAllGames)
  $('.box').on('click', gameEvents.onUpdateMove)
})
