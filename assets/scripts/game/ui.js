'use strict'
const store = require('../store.js')
const config = require('../config.js')

const createGameSuccess = (game) => {
  // THe next 3 lines store the game ID, cells, and over
  store.gameID = game.game.id
  store.cells = game.game.cells
  store.over = game.game.over
  store.player = 'x'
  // console.log(store)
  // console.log('this is the store object', store)
  $('#game-message').show()
  $('#game-message').html(`New game was created. It is Eagle's turn`)
  $('#game-message').removeClass('error-message')
  $('#game-message').addClass('success-message')
  // $('#game-message').html(`Eagle's turn`)
  $('#board').show()
  $('.box').empty()
  $('.show-all-games-dropdown').show()
}

const getGameSuccess = (gameData) => {
  // console.log('this is get game success object', gameId)
  store.game = gameData.game
  $('#game-message').html(`Previous game with game id:"${gameData}" was loaded.`)
  $('#game-message').removeClass('error-message')
  $('#game-message').addClass('success-message')
  $('#board').show()
}

const showAllGamesSuccess = (gameData) => {
  // console.log('this is show all game success object', store.user.id)
  store.game = gameData.games
  // console.log(store.game.length)
  // $.each(store.game[].id)
  // store.game.forEach((game) => {
  //   const gameHtml = document.createElement('div')
  //   gameHtml.innerHTML = `${game.id}`
  //   // console.log(gameHtml)
  //   document.getElementById('dropdown-menu').append(gameHtml)
  //   // debugger
  //   // $('#dropdown-menu').html($('<div>', {class: 'data-cell-index=0'}))
  // })
  // $('.dropdown-menu').html(gameIdsHtml)
  // $('#game-message').html(`Previous game with game id:"${store.game[0].id}" was loaded.`)
  $('#game-message').html(`You have played ${store.game.length} total games`)
  // $('#dropdown-menu').html(`You have played ${store.game.length} total games`)
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
    $($(event.target)).html(`<img src="${config.teamIconsUrls.eagles}"" alt=nfl-icon height="95" width="125">`)
    $('#game-message').html(`Patriot's Turn`)
  } else if (value === 'o' && over === false && store.cells[id] === '') {
    $($(event.target)).html(`<img src="${config.teamIconsUrls.patriots}" alt=nfl-icon height="105" width="125">`)
    $('#game-message').html(`Eagle's Turn`)
  }
}

module.exports = {
  createGameSuccess,
  getGameSuccess,
  showAllGamesSuccess,
  failure,
  updateMoves
}
