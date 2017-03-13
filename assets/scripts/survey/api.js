'use strict';

const config = require('../config');
const store = require('../store');

const surveyIndex = function() {
  return $.ajax({
    url: config.apiOrigin + '/surveys',
    method: 'GET',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
  });
};

const surveyShow = function (id) {
  return $.ajax({
    url: config.apiOrigin + '/surveys/' + id,
    method: 'GET',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
  });
};

const surveyCreate = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/surveys',
    method: 'POST',
    headers: {
      Authorization: `Token token=${store.user.token}`,
    },
    data,
  });
};

const updateSurveyQuestion = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/surveys/' + data.survey.id,
    method: 'PATCH',
    headers: {
      Authorization: `Token token=${store.user.token}`,
    },
    data,
  });
};

const updateAnswer = function (data, id) {
  // console.log(data);
  return $.ajax({
    url: config.apiOrigin + '/surveys/' + id,
    method: 'PATCH',
    headers: {
      Authorization: `Token token=${store.user.token}`,

    },
    data,
  });
};

const destroySurvey = function (id) {
  return $.ajax({
    url: config.apiOrigin + '/surveys/' + id,
    method: 'DELETE',
    headers: {
      Authorization: `Token token=${store.user.token}`,
    },
  });
};

module.exports = {
  surveyIndex,
  surveyCreate,
  updateSurveyQuestion,
  updateAnswer,
  destroySurvey,
  surveyShow,
};
