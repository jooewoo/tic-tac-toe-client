'use strict'
const store = require('../store.js')

const signUpSuccess = (signUpResponse) => {
  $('#game-message').show()
  $('#game-message').html('You signed up successfully')
  $('#game-message').removeClass('error-message')
  $('#game-message').addClass('success-message')
  $('#game-message').fadeOut(5000)
}

const signInSuccess = (signInResponse) => {
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
  $('.show-all-games-dropdown').removeClass('hidden')
  $('#show-all-games').removeClass('hidden')
}

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
  // $('#game-message').fadeOut(5000)

  $('#change-password-dropdown').addClass('hidden')
  $('#sign-out-button').addClass('hidden')
  $('#sign-up-form-dropdown').removeClass('hidden')
  $('#sign-in-form-dropdown').removeClass('hidden')
  $('#start-new-game').addClass('hidden')
  $('#previous-game').addClass('hidden')
  $('#show-all-games').addClass('hidden')
  $('#board').hide()
  $('#change-password-form').trigger('reset')
  $('#sign-up-form').trigger('reset')
  $('.show-all-games-dropdown').addClass('hidden')
  $('#show-all-games').addClass('hidden')
}

const failure = (failureResponse) => {
  $('#game-message').html('Something went wrong, please try again.')
  $('#game-message').removeClass('success-message')
  $('#game-message').addClass('error-message')
}

module.exports = {
  signUpSuccess,
  signInSuccess,
  changePasswordSuccess,
  signOutSuccess,
  failure
}
