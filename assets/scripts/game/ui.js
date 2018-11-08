'use strict'
const store = require('../store.js')

const createGameSuccess = () => {
  console.log('this is create game success object', store.user)
  $('#game-message').html(`New game with game id:"${store.user.id}" was created.`)
  $('#game-message').removeClass('error-message')
  $('#game-message').addClass('success-message')
}

const getGameSuccess = () => {
  console.log('this is get game success object', store.user)
  $('#game-message').html(`Previous game with game id:"${store.user.id}" was loaded.`)
  $('#game-message').removeClass('error-message')
  $('#game-message').addClass('success-message')
}

const showAllGamesSuccess = () => {
  console.log(store.user)
  console.log('this is show all game success object', store.user)
  $('#game-message').html(`Previous game with game id:"${store.user}" was loaded.`)
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
  showAllGamesSuccess,
  failure
}
