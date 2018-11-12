'use strict'
const store = require('../store.js')

const signUpSuccess = (signUpResponse) => {
  $('#message').html('You signed up successfully')
  $('#message').removeClass('error-message')
  $('#message').addClass('success-message')
}

const signInSuccess = (signInResponse) => {
  store.user = signInResponse.user
  $('#message').html('You signed in successfully')
  $('#message').removeClass('error-message')
  $('#message').addClass('success-message')

  $('#change-password-form').removeClass('hidden')
  $('#sign-out-button').removeClass('hidden')
  $('#sign-up-form').addClass('hidden')
  $('#sign-in-form').addClass('hidden')
  $('#start-new-game').removeClass('hidden')
  $('#previous-game').removeClass('hidden')
  $('#show-all-games').removeClass('hidden')
}

const changePasswordSuccess = () => {
  $('#message').html('You changed password successfully')
  $('#message').removeClass('error-message')
  $('#message').addClass('success-message')
}

const signOutSuccess = () => {
  $('#message').html('You signed out successfully')
  $('#message').removeClass('error-message')
  $('#message').addClass('success-message')

  $('#change-password-form').addClass('hidden')
  $('#sign-out-button').addClass('hidden')
  $('#sign-up-form').removeClass('hidden')
  $('#sign-in-form').removeClass('hidden')
  $('.box').hide()
}

const failure = (failureResponse) => {
  $('.failure').html('Something went wrong, please try again.')
  $('.failure').removeClass('success-message')
  $('.failure').addClass('error-message')
}

module.exports = {
  signUpSuccess,
  signInSuccess,
  changePasswordSuccess,
  signOutSuccess,
  failure
}
