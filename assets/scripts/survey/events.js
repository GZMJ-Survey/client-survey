'use strict';

const getFormFields = require(`../../../lib/get-form-fields`);
const api = require('./api');
const ui = require('./ui');
const store = require('../store');
const surveyStore = require('../surveyStore');

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
  let data = {
    survey: {
      id: $('#survey-id-input').val(),
      questions: {
        problem: $('#problem-input').val(),

      }
    }
  };
  api.updateSurveyQuestion(data)
    .then(ui.successQuestionCreate)
    .catch(ui.failureSurveyCreate);
};

const onAnswer = function(event) {
  event.preventDefault();
  console.log(surveyStore.length);

  console.log('this is the survey problem id', $('.survey-problem-id')[0].value);
  console.log('this is the survey id', $('.survey-id')[0].value);

  let problems = [];
  for (let i = 0; i < surveyStore.length; i++) {
    let result = {};
    result = {
     answers: {
      response: true
     }
    };
    problems.push(result);

  }
  let data = {
    survey: {
      questions: problems
    }

  };

    api.updateAnswer(data, $('.answer-question').data("id"))
    .then((response)=>console.log(response))
    .catch((error)=>console.error(error))
    .then(ui.successAnswer)
    .catch(ui.failureAnswer);
};

const onDestroy = function (event) {
  event.preventDefault();

  let id = $(event.target).data('id');
  // console.log("id is ", id);

  api.destroySurvey(id)
    .then(ui.successDestroy)
    .catch(ui.failureDestroy);
};

const addHandlers = () => {
  $('.survey-index').on('click', onSurveyIndex);
  $('#survey-create').on('submit', onSurveyCreate);
  $('#question-create').on('submit', onUpdateSurveyQuestion);
  $('.index-display').on('click', '.answer-question', onAnswer);
  $('.index-display').on('click', '.survey-destroy', onDestroy);
};


module.exports = {
  addHandlers,
};
