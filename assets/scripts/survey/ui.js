'use strict';
const surveyStore = require('../surveyStore');
const store = require('../store');
const surveyIndexHandlerbars = require('../templates/helpers/survey-index.handlebars');
const api = require('./api.js');



const successIndex = (data) => {
  $('.survey-alerts').text('The Number of Surveys is ' + data.surveys.length);
  console.log(data.surveys);
  surveyStore.survey=data.surveys;
  let surveyHtml = surveyIndexHandlerbars({ surveys: data.surveys });
  $('.index-display').html(surveyHtml);
  $('label.survey-contents').hide();
  return surveyStore;
};

const failureIndex = (error) => {
  console.error(error);
};

const successSurveyCreate = (data) => {
  console.log(data);
  // console.log(data;
  $('#survey-create')[0].reset();
  $('.alerts').text('Created New Survey!');
};

const failureSurveyCreate = (error) => {
  console.log(error);
  $('.alerts').text('Survey name has already been created, choose new name');
};

const successQuestionCreate = (data) => {
  console.log(data);
  $('.alerts').text('Added Question to Survey');
  $('#question-create')[0].reset();
  // events.onSurveyIndex(data);

};

const failureQuestionCreate = (error) => {
  console.log(error);
  $('.alerts').text('Invalid User');
};

const successAnswer = (data) => {
  console.log("surveyStore is", surveyStore);
  console.log("store is", data);
  $('.alerts').text('Survey Answers Submitted');
};

const failureAnswer = (error) => {
  console.log(error);
};



const successDestroy = () => {
  // api.surveyIndex()
  // .then(successIndex)
  // .catch(failureIndex)
  // ;

};

const failureDestroy = (error) => {
  console.log(error);
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
