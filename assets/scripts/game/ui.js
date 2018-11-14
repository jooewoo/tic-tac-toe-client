'use strict'
const store = require('../store.js')
const config = require('../config.js')

const createGameSuccess = (game) => {
  // THe next 3 lines store the game ID, cells, and over
  store.gameID = game.game.id
  store.cells = game.game.cells
  store.over = game.game.over
  // console.log('this is the store object', store)
  $('#game-message').show()
  $('#game-message').html(`New game was created.`)
  $('#game-message').removeClass('error-message')
  $('#game-message').addClass('success-message')
  $('#game-message').html(`${store.player}'s turn`)
  $('#board').show()
  $('.box').empty()
}

const getGameSuccess = (gameData) => {
  // console.log('this is get game success object', gameId)
  $('#game-message').html(`Previous game with game id:"${gameData}" was loaded.`)
  $('#game-message').removeClass('error-message')
  $('#game-message').addClass('success-message')
  $('#board').show()
}

const showAllGamesSuccess = () => {
  // console.log('this is show all game success object', store.user.id)
  $('#game-message').html(`Previous game with game id:"${store.user.id}" was loaded.`)
  $('#game-message').removeClass('error-message')
  $('#game-message').addClass('success-message')
}

const failure = () => {
  $('.game-failure').html('Something went wrong, please try again.')
  $('.game-failure').removeClass('success-message')
  $('.game-failure').addClass('error-message')
}

const updateMoves = (id, value, over, winner) => {
  if (value === 'x' && over === false && store.cells[id] === '') {
    $($(event.target)).html(`<img src='${config.teamIconsUrls.eagles}' alt=nfl-icon height="95" width="125">`)
  } else if (value === 'o' && over === false && store.cells[id] === '') {
    $($(event.target)).html(`<img src='${config.teamIconsUrls.patriots}' alt=nfl-icon height="105" width="125">`)
  }
}

module.exports = {
  createGameSuccess,
  getGameSuccess,
  showAllGamesSuccess,
  failure,
  updateMoves
}
