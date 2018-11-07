'use strict'

const getFormFields = require('../../../lib/get-form-fields.js')
// used to copy information into an object
const api = require('./api.js')
// requests you want to use for your data
const ui = require('./ui.js')
// initializes the ui.js to show data to user

const onSignUp = (event) => {
  event.preventDefault()
  // to stop the default value that refreshes the page
  console.log('sign up ran')
  const userData = getFormFields(event.target)
  $(event.target).trigger('reset')
  api.signUp(userData)
    .then(ui.signUpSuccess)
    .catch(ui.failure)
}

const onSignIn = (event) => {
  event.preventDefault()
  // to stop the default value that refreshes the page
  const userData = getFormFields(event.target)
  $(event.target).trigger('reset')
  api.signIn(userData)
    .then(ui.signInSuccess)
    .catch(ui.failure)
}

module.exports = {
  onSignUp,
  onSignIn
}
