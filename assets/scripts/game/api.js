'use strict'
const config = require('../config.js')
const store = require('../store.js')

const createGame = (gameData) => {
  return $.ajax({
    url: config.apiUrl + '/games/',
    method: 'POST',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    contentType: 'application/json',
    data: JSON.stringify(gameData)
  })
}

const getGame = (gameId) => {
  return $.ajax({
    url: config.apiUrl + '/games/' + gameId,
    method: 'GET',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    contentType: 'application/json',
    data: JSON.stringify(gameId)
  })
}

const showAllGames = (gameData) => {
  return $.ajax({
    url: config.apiUrl + `/games`,
    method: 'GET',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    contentType: 'application/json',
    data: JSON.stringify(gameData)
  })
}

module.exports = {
  createGame,
  getGame,
  showAllGames
}
