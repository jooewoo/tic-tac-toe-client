'use strict'
const store = require('../store.js')

const createGameSuccess = () => {
  $('#game-message').html(`New game was created.`)
  $('#game-message').removeClass('error-message')
  $('#game-message').addClass('success-message')
  $('#board').show()
}

const getGameSuccess = (gameId) => {
  console.log('this is get game success object', gameId)
  $('#game-message').html(`Previous game with game id:"${gameId}" was loaded.`)
  $('#game-message').removeClass('error-message')
  $('#game-message').addClass('success-message')
  $('#board').show()
}

const showAllGamesSuccess = () => {
  console.log('this is show all game success object', store.user.id)
  $('#game-message').html(`Previous game with game id:"${store.user.id}" was loaded.`)
  $('#game-message').removeClass('error-message')
  $('#game-message').addClass('success-message')
}

const failure = () => {
  $('.game-failure').html('Something went wrong, please try again.')
  $('.game-failure').removeClass('success-message')
  $('.game-failure').addClass('error-message')
}

const updateMoves = (id, player) => {
  console.log()
  if (player === 'x') {
    $('#' + id)
  } else if (player === 'o') {
    $('#' + id)
  }
}
module.exports = {
  createGameSuccess,
  getGameSuccess,
  showAllGamesSuccess,
  failure,
  updateMoves
}
