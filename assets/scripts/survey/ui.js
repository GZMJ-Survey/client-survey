'use strict';
const surveyStore = require('../surveyStore');
const surveyIndexHandlerbars = require('../templates/helpers/survey-index.handlebars');

const successIndex = (data) => {
  console.log(data);
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
};

const failureSurveyCreate = (error) => {
  console.log(error);
};

const successQuestionCreate = (data) => {
  console.log(data);
};

const successAnswer = (data) => {
  console.log(data);
};

const failureAnswer = (error) => {
  console.log(error);
};

const successDestroy = (data) => {
  console.log(data);
};

const failureDestroy = (error) => {
  console.log(error);
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
