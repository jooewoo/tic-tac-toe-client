'use strict'
const config = require('../config.js')
// const store = require('../store.js')

const signUp = (inputData) => {
  return $.ajax({
    url: config.apiUrl + '/sign-up/',
    method: 'POST',
    contentType: 'application/json',
    data: JSON.stringify(inputData)
  })
}

const signIn = (inputData) => {
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    contetType: 'application/json',
    data: JSON.stringify(inputData)
  })
}

module.exports = {
  signUp,
  signIn
}
