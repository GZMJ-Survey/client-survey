'use strict';

const getFormFields = require(`../../../lib/get-form-fields`);
const api = require('./api');
const ui = require('./ui');
const store = require('../store');
const surveyStore = require('../surveyStore');

const onSurveyIndex = function(event) {
  if (event && event.preventDefault) {
    event.preventDefault();
  }
  api.surveyIndex()

    .then(ui.successIndex)
    .catch(ui.failureIndex);

};

const onSurveyShow = function (event) {
  event.preventDefault();
  let id = $(event.target).data("id");
  api.surveyShow(id)
  .then((response)=> {
    if (response.survey.questions[0] !== undefined){
      $('.survey-alerts').text("Survey, " + response.survey.title + ", has been used " + response.survey.questions[0].answers.length + " times.");
    }

    if (store.user.id !== response.survey._owner){
      $('.add-question-form').hide();
      $('.survey-destroy').hide();
      $('.answer-question').show();
    } else {
      $('.add-question-form').show();
      $('.survey-destroy').show();
      $('.answer-question').hide();
    }

    let clicked = $(this);
    if (clicked.hasClass('open')) {
      clicked.removeClass('open');
      clicked.next('.survey-contents').stop().slideUp(500);
      clicked.find('.fa').removeClass('fa-chevron-up').addClass('fa-chevron-down');
    } else {
      let open = $('.survey-show.open');
      open.next('.survey-contents').slideUp(500);
      open.find('.fa').removeClass('fa-chevron-up').addClass('fa-chevron-down');
      open.removeClass('open');
      clicked.addClass('open');
      clicked.next('.survey-contents').stop().slideDown(500);
      clicked.find('.fa').addClass('fa-chevron-up').removeClass('fa-chevron-down');
    }
  })
  ;
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
    .then(onSurveyIndex)
    .catch(ui.failureSurveyCreate);

    $('.create-button').on('click', function(){
      $('.field-style').val('');
    });
};

const onUpdateSurveyQuestion = function(event) {
  if (event && event.preventDefault) {
    event.preventDefault();
  }
  console.log("this is", $('#problem-input').val());
  console.log("this is", $('#survey-id-input').val());
  let data = getFormFields(event.target);

  api.updateSurveyQuestion(data)
    .then(onSurveyIndex)
    .then(ui.successQuestionCreate)
    .catch(ui.failureQuestionCreate);
};

const onAnswer = function(event) {
  event.preventDefault();

  let size = 0;
  for(let i=0; i<surveyStore.survey.length; i++){
    if (surveyStore.survey[i].id === $(this).data("id")){
      size = i+1;
    }
  }
  let problems = [];
  for (let i = 0; i < size; i++) {
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
    api.updateAnswer(data, $(this).data("id"))
    .then((response)=>console.log(response))
    .catch((error)=>console.error(error))
    .then(ui.successAnswer)
    .then(onSurveyIndex)
    .catch(ui.failureAnswer);
};

const onDestroy = function (event) {
  event.preventDefault();

  let id = $(event.target).data('id');
  // console.log("id is ", id);

  api.destroySurvey(id)
  .then(onSurveyIndex)
    .then(ui.successDestroy)
    .catch(ui.failureDestroy);
};

const addHandlers = () => {
  $('.survey-index').on('click', onSurveyIndex);
  $('#survey-create').on('submit', onSurveyCreate);
  $('.index-display').on('submit', $('.question-create').val(), onUpdateSurveyQuestion);
  $('.index-display').on('click', '.answer-question', onAnswer);
  $('.index-display').on('click', '.survey-destroy', onDestroy);
  $('.index-display').on('click', '.survey-show', onSurveyShow);
};


module.exports = {
  addHandlers,
  onSurveyIndex,
};
