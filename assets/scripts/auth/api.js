'use strict'
<<<<<<< HEAD
const config = require('../config.js')
// const store = require('../store.js')
=======

const config = require('../config.js')
const store = require('../store.js')
>>>>>>> feature

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
<<<<<<< HEAD
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    contetType: 'application/json',
=======
    url: config.apiUrl + '/sign-in/',
    method: 'POST',
    contentType: 'application/json',
    data: JSON.stringify(inputData)
  })
}

const changePassword = (inputData) => {
  return $.ajax({
    url: config.apiUrl + '/change-password/',
    method: 'PATCH',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    contentType: 'application/json',
    data: JSON.stringify(inputData)
  })
}

const signOut = (inputData) => {
  return $.ajax({
    url: config.apiUrl + '/sign-out/',
    method: 'DELETE',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    contentType: 'application/json',
>>>>>>> feature
    data: JSON.stringify(inputData)
  })
}

module.exports = {
  signUp,
<<<<<<< HEAD
  signIn
=======
  signIn,
  changePassword,
  signOut
>>>>>>> feature
}
