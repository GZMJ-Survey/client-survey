'use strict';

const getFormFields = require(`../../../lib/get-form-fields`);
const api = require('./api');
const ui = require('./ui');
const store = require('../store');


const onSignUp = function(event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  if (data.credentials.password === data.credentials.password_confirmation) {
      api.signUp(data)
        .then(ui.signUpSuccess)
        .catch(ui.signUpFailure);
    } else {
      ui.signUpError();
    }
};

const onSignIn = function(event) {
  event.preventDefault();
  console.log('event.target is ', event.target);
  let data = getFormFields(event.target);
  console.log(data);
  api.signIn(data)
    .then((response) => {
      store.user = response.user;
      return store;
    })
    .then(ui.signInSuccess)
    .catch(ui.signInError);
};

const onChangePassword = function(event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordError);
};

const onSignOut = function(event) {
  event.preventDefault();
  api.signOut()
    .then(() => {
      delete store.user;
      return store;
    })
    .then(ui.signOutSuccess)
    .catch(ui.signOutError);
};




const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp);
  $('#sign-in').on('submit', onSignIn);
  $('#change-password').on('submit', onChangePassword);
  $('#sign-out').on('submit', onSignOut);
};

module.exports = {
  addHandlers,
};
