'use strict';

const getFormFields = require(`../../../lib/get-form-fields`);
const api = require('./api');
const ui = require('./ui');
const store = require('../store');

const onSurveyIndex = function(event) {
  event.preventDefault();
  api.surveyIndex()
    .then(ui.successIndex)
    .catch(ui.failureIndex);
};

const onSurveyCreate = function(event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.surveyCreate(data)
    .then((response) => {
      store.surveyid = response.survey.id;
      console.log(store.surveyid);
      return store;
    })
    .then(ui.successSurveyCreate)
    .catch(ui.failureSurveyCreate);
};

const onUpdateSurveyQuestion = function(event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.updateSurveyQuestion(data, store.surveyid)
    .then(ui.successQuestionCreate)
    .catch(ui.failureSurveyCreate);
};

const addHandlers = () => {
  $('.survey-index').on('click', onSurveyIndex);
  $('#survey-create').on('submit', onSurveyCreate);
  $('#question-create').on('submit', onUpdateSurveyQuestion);

};


module.exports = {
  addHandlers,
};
