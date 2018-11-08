'use strict'
const store = require('../store.js')

const createGameSuccess = (newGame) => {
  store.user = newGame.game
  console.log(store.user)
  $('#game-message').html(`New game with game id:"${newGame.game.player_x.id}" was created.`)
  $('#game-message').removeClass('error-message')
  $('#game-message').addClass('success-message')
}

const getGameSuccess = (newGame) => {
  store.user = newGame.game
  console.log(store.user)
  $('#game-message').html(`Previous game with game id:"${newGame.game.player_x.id}" was loaded.`)
  $('#game-message').removeClass('error-message')
  $('#game-message').addClass('success-message')
}

const failure = () => {
  $('.game-failure').html('Something went wrong, please try again.')
  $('.game-failure').removeClass('success-message')
  $('.game-failure').addClass('error-message')
}

module.exports = {
  createGameSuccess,
  getGameSuccess,
  failure
}
