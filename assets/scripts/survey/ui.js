'use strict';
const surveyStore = require('../surveyStore');
const store = require('../store');
const surveyIndexHandlerbars = require('../templates/helpers/survey-index.handlebars');
const api = require('./api.js');



const successIndex = (data) => {
  $('.survey-alerts').text('The Number of Surveys is ' + data.surveys.length);
  surveyStore.survey=data.surveys;
  let surveyHtml = surveyIndexHandlerbars({ surveys: data.surveys });
  $('.index-display').html(surveyHtml);
  $('label.survey-contents').hide();
  return surveyStore;
};

const failureIndex = (error) => {

};

const successSurveyCreate = (data) => {
  $('#survey-create')[0].reset();
  $('.alerts').text('Created New Survey!');
  $('.survey-message').empty();
};

const failureSurveyCreate = (error) => {
  $('.alerts').text('Survey name has already been created, choose new name');
};

const successQuestionCreate = (data) => {
  $('.alerts').text('Added Question to Survey');
  $('#question-create')[0].reset();
};

const failureQuestionCreate = (error) => {
  $('.question-fail').text("question name already taken")
};

const successAnswer = (data) => {
  $('.alerts').text('Survey Answers Submitted');
};

const failureAnswer = (error) => {
};



const successDestroy = () => {
};

const failureDestroy = (error) => {
  $('.alerts').text('Invalid User');
};


module.exports = {
  successIndex,
  failureIndex,
  successSurveyCreate,
  failureSurveyCreate,
  successQuestionCreate,
  failureQuestionCreate,
  successAnswer,
  failureAnswer,
  successDestroy,
  failureDestroy,
};
