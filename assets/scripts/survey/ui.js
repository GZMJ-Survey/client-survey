'use strict';
const surveyStore = require('../surveyStore');
const store = require('../store');
const surveyIndexHandlerbars = require('../templates/helpers/survey-index.handlebars');

const successIndex = (data) => {
  $('.survey-alerts').text('The Number of Surveys is ' + data.surveys.length);
  console.log("the number of surveys is", data.surveys.length);
  surveyStore.length=data.surveys[0].questions.length;
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
  $('.survey-alerts').text('Created New Survey!');
};

const failureSurveyCreate = (error) => {
  console.log(error);
  $('.survey-alerts').text('Survey name has already been created, choose new name');
};

const successQuestionCreate = (data) => {
  console.log(data);
  $('.survey-alerts').text('Added Question to Survey');
  $('#question-create')[0].reset();

};

const successAnswer = (data) => {
  console.log("surveyStore is", surveyStore);
  console.log("store is", data);
  $('.survey-alerts').text('Survey Answers Submitted');
};

const failureAnswer = (error) => {
  console.log(error);
};

const successDestroy = (data) => {
  console.log(data);
  $('.survey-alerts').text('Deleted Survey');
};

const failureDestroy = (error) => {
  console.log(error);
  $('.survey-alerts').text('Invalid User');
};


module.exports = {
  successIndex,
  failureIndex,
  successSurveyCreate,
  failureSurveyCreate,
  successQuestionCreate,
  successAnswer,
  failureAnswer,
  successDestroy,
  failureDestroy,
};
