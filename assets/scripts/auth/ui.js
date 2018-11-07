'use strict'
const store = require('../store.js')

const signUpSuccess = (signUpRespone) => {
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
}

const failure = (FailureResponse) => {
  $('.failure').html('Something went wrong, please try again.')
  $('.failure').removeClass('success-message')
  $('.failure').addClass('error-message')
}

module.export = {
  signUpSuccess,
  signInSuccess,
  failure
}
