'use strict'
const store = require('../store.js')

<<<<<<< HEAD
const signUpSuccess = (signUpRespone) => {
=======
const signUpSuccess = (signUpResponse) => {
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
  store.user = signInResponse.user
  $('#message').html('You signed in successfully')
  $('#message').removeClass('error-message')
  $('#message').addClass('success-message')

  $('#change-password-form').removeClass('hidden')
  $('#sign-out-button').removeClass('hidden')
  $('#sign-up-form').addClass('hidden')
  $('#sign-in-form').addClass('hidden')
}

<<<<<<< HEAD
const failure = (FailureResponse) => {
=======
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
}

const failure = (failureResponse) => {
>>>>>>> feature
  $('.failure').html('Something went wrong, please try again.')
  $('.failure').removeClass('success-message')
  $('.failure').addClass('error-message')
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
