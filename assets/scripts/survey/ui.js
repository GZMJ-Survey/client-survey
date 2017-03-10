'use strict';

const surveyIndexHandlerbars = require('../templates/helpers/survey-index.handlebars');

const successIndex = (data) => {
  console.log(data);
  let surveyHtml = surveyIndexHandlerbars({ surveys: data.surveys });
  $('.index-display').html(surveyHtml);
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
