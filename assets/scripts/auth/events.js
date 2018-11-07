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
<<<<<<< HEAD
  console.log('sign up ran')
=======
>>>>>>> feature
  const userData = getFormFields(event.target)
  $(event.target).trigger('reset')
  api.signUp(userData)
    .then(ui.signUpSuccess)
    .catch(ui.failure)
}

const onSignIn = (event) => {
  event.preventDefault()
  // to stop the default value that refreshes the page
<<<<<<< HEAD
=======
  console.log('sign in ran')
>>>>>>> feature
  const userData = getFormFields(event.target)
  $(event.target).trigger('reset')
  api.signIn(userData)
    .then(ui.signInSuccess)
    .catch(ui.failure)
<<<<<<< HEAD
=======
  console.log(userData)
}

const onChangePassword = (event) => {
  event.preventDefault() // or you can use debugger
  const userData = getFormFields(event.target)
  $(event.target).trigger('reset')
  api.changePassword(userData)
    .then(ui.changePasswordSuccess)
    .catch(ui.failure)
}

const onSignOut = (event) => {
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.failure)
>>>>>>> feature
}

module.exports = {
  onSignUp,
<<<<<<< HEAD
  onSignIn
=======
  onSignIn,
  onChangePassword,
  onSignOut
>>>>>>> feature
}
