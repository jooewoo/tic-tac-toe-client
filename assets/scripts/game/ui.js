'use strict'
const store = require('../store.js')

const createGameSuccess = (game) => {
  store.gameID = game.game.id
  store.cells = game.game.cells
  store.over = game.game.over
  console.log('this is the store object', store)
  $('#game-message').html(`New game was created.`)
  $('#game-message').removeClass('error-message')
  $('#game-message').addClass('success-message')
  $('#board').show()
  $('.box').empty()
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

const updateMoves = (id, value, over) => {
  if (value === 'x' && over === false && store.cells[id] === '') {
    $($(event.target)).html(value)
  } else if (value === 'o' && over === false && store.cells[id] === '') {
    $($(event.target)).html(value)
  }
}

module.exports = {
  createGameSuccess,
  getGameSuccess,
  showAllGamesSuccess,
  failure,
  updateMoves
}
