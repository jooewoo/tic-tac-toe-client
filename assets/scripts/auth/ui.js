'use strict'
const store = require('../store.js')

<<<<<<< HEAD
const signUpSuccess = (signUpRespone) => {
=======
const signUpSuccess = (signUpResponse) => {
<<<<<<< HEAD
>>>>>>> feature
  $('#message').html('You signed up successfully')
  $('#message').removeClass('error-message')
  $('#message').addClass('success-message')
}

const signInSuccess = (signInResponse) => {
<<<<<<< HEAD
=======
  console.log('this is the' + signInResponse)
>>>>>>> feature
=======
  $('#game-message').show()
  $('#game-message').html('You signed up successfully')
  $('#game-message').removeClass('error-message')
  $('#game-message').addClass('success-message')
  $('#game-message').fadeOut(5000)
}

const signInSuccess = (signInResponse) => {
>>>>>>> feature
  store.user = signInResponse.user
  $('#game-message').show()
  $('#game-message').html('You signed in successfully')
  $('#game-message').removeClass('error-message')
  $('#game-message').addClass('success-message')

  $('#change-password-dropdown').removeClass('hidden')
  $('#sign-out-button').removeClass('hidden')
  $('#sign-up-form-dropdown').addClass('hidden')
  $('#sign-in-form-dropdown').addClass('hidden')
  $('#start-new-game').removeClass('hidden')
  $('#start-new-game').removeClass('hidden')
  $('.board-buttons').removeClass('hidden')
  $('#previous-game').removeClass('hidden')
  $('#show-all-games').removeClass('hidden')
}

<<<<<<< HEAD
const failure = (FailureResponse) => {
=======
const changePasswordSuccess = () => {
  $('#game-message').html('You changed password successfully')
  $('#game-message').removeClass('error-message')
  $('#game-message').addClass('success-message')
  $('#game-message').fadeOut(5000)
}

const signOutSuccess = () => {
  $('#game-message').html('You signed out successfully')
  $('#game-message').removeClass('error-message')
  $('#game-message').addClass('success-message')
  $('#game-message').fadeOut(5000)

  $('#change-password-dropdown').addClass('hidden')
  $('#sign-out-button').addClass('hidden')
  $('#sign-up-form-dropdown').removeClass('hidden')
  $('#sign-in-form-dropdown').removeClass('hidden')
  $('#start-new-game').addClass('hidden')
  $('#previous-game').addClass('hidden')
  $('#show-all-games').addClass('hidden')
  $('#board').hide()
  $('#change-password-dropdown').trigger('reset')
}

const failure = (failureResponse) => {
<<<<<<< HEAD
>>>>>>> feature
  $('.failure').html('Something went wrong, please try again.')
  $('.failure').removeClass('success-message')
  $('.failure').addClass('error-message')
=======
  $('#game-message').html('Something went wrong, please try again.')
  $('#game-message').removeClass('success-message')
  $('#game-message').addClass('error-message')
>>>>>>> feature
}

<<<<<<< HEAD
module.export = {
  signUpSuccess,
  signInSuccess,
=======
module.exports = {
  signUpSuccess,
  signInSuccess,
  changePasswordSuccess,
  signOutSuccess,
>>>>>>> feature
  failure
}
