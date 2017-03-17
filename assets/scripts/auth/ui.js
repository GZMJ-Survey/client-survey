'use strict';
// const store = require('../store');
const surveyEvents = require('../survey/events');

const success = (data) => {
  if (data) {
  $('.message').text('Success!');
  }
};

const failure = (error) => {
  $('.message').text('Error!');
};

const clearModalInput = function (e) {
$(e + ' > fieldset > label > input').val('');
};

const signUpSuccess = function () {
  $('.message').show();
  $('.message').text('Thank you for signing up! Now sign in!').css('color', 'blue');
  $('#modalSignUp').modal('hide');
  // $('.message').hide(10000);
  clearModalInput('#sign-up');
  $('#modalSignUp #sign-up').html();
};

const signUpError = function () {
  $('.message').show();
  $('.message').text('Error signing up! Try again.').css('color', 'orange');
  $('#modalSignUp').modal('hide');
  clearModalInput('#sign-up');
};


const signInSuccess = function (data) {
  $('.message').show();
  // $('.message').text('You are Successfully signed in!').css('color', 'blue');
  $('.message').hide();
  $('#modalSignIn').modal('hide');
  $('#button-signin-nav .modal-body').empty();
  $('#button-signin-nav').hide();
  $('#button-signup-nav').hide();
  $('.style-button-password').show();
  $('.style-button-signout').show();
  $('.user-name').html('<div>' + data.user.email + '</div>');
  clearModalInput('#sign-in');
  $('.survey-style').show();
  surveyEvents.onSurveyIndex();
  $('.user-name').show();
};

const signInError = function () {
  $('.message').show();
  $('.message').text('Something went wrong. Sign in again!').css('color', 'orange');
  $('#modalSignIn').modal('hide');
  clearModalInput('#sign-in');
};

const changePasswordSuccess = function () {
  $('.message').show();
  $('.message').text('Your password has changed!').css('color', 'blue');
  $('#modalChangePassword').modal('hide');
  // $('.message').hide(10000);
  clearModalInput('#change-password');
};

const changePasswordError = function () {
  $('.message').show();
  $('.message').text('Changing password failed!').css('color', 'orange');
  $('#modalChangePassword').modal('hide');
};

const signOutSuccess = function () {
  $('.message').show();
  $('.message').text('You have successfully signed out!');
  $('#modalSignOut').modal('hide').css('color', 'blue');
  // $('.message').hide(10000);
  $('.style-button-password').hide();
  $('#button-signin-nav').show();
  $('#button-signup-nav').show();
  $('#button-signout-nav').hide();
  $('.user-name').hide();
  clearModalInput('#sign-up');
  $('.survey-style').hide();
  $('.alerts').empty();
  $('.survey-alerts').empty();
  clearModalInput('#change-password');
};

const signOutError = function () {
  $('.message').show();
  $('.message').text('Something went wrong! Try to sign out again.');
  $('#modalSignOut').modal('hide').css('color', 'orange');
  clearModalInput('#sign-up');
};

module.exports = {
  success,
  failure,
  signUpSuccess,
  signUpError,
  signInSuccess,
  signInError,
  changePasswordSuccess,
  changePasswordError,
  signOutSuccess,
  signOutError,
  clearModalInput
};
