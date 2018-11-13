'use strict'

const getFormFields = require('../../../lib/get-form-fields.js')
// used to copy information into an object
const api = require('./api.js')
// requests you want to use for your data
const ui = require('./ui.js')
// initializes the ui.js to show data to user
// const config = require('./../config.js')

const onSignUp = (event) => {
  event.preventDefault()
  // to stop the default value that refreshes the page
  const userData = getFormFields(event.target)
  $(event.target).trigger('reset')
  api.signUp(userData)
    .then(ui.signUpSuccess)
    .catch(ui.failure)
}

const onSignIn = (event) => {
  event.preventDefault()
  const userData = getFormFields(event.target)
  $(event.target).trigger('reset')
  api.signIn(userData)
    .then(ui.signInSuccess)
    .catch(ui.failure)
}

const onChangePassword = (event) => {
  event.preventDefault()
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
}

// const onChooseTeam = (event) => {
//   const favoriteTeam = event.target.id
//   $('.list').html('')
//   let listOfTeams = ''
//   for (const teamName in config.teamIconsUrls) {
//     const team = config.teamIconsUrls[teamName]
//     listOfTeams += `<p><span><img id="${config.teamNames[teamName]}" class="sm-icon ${favoriteTeam}" src="${team}"  alt="NFL-Teams"></span>  ${config.teamNames[teamName]}</p>`
//   }
//   $('.list').append(listOfTeams)
// }

// const onChooseTeam = (event) => {
//   const favoriteTeam = event.target.id
//   const teamIcons = config.teamIconsUrls
//   let listOfTeams = ''
//
//   function displayTeams (teamName, teamIcons) {
//     // const favoriteTeam = event.target.id
//     const team = teamIcons[teamName]
//     listOfTeams += `<p><span><img id="${teamIcons[teamName]}" class="sm-icon ${favoriteTeam}" src="${team}"  alt="NFL-Teams"></span>  ${teamIcons[teamName]}</p>`
//   }
//
//   listOfTeams.foreach(displayTeams)
//   $('.list').append(listOfTeams)
// }

module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut
}
