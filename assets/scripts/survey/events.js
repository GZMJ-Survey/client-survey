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

const addHandlers = () => {
  $('.survey-index').on('click', onSurveyIndex);

};


module.exports = {
  addHandlers,
};
