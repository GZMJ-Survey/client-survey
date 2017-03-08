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

const surveyCreate = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/surveys',
    method: 'POST',
    headers: {
      Authorization: `Token token=${store.user.token}`,
    },
    data: data,
  });
};

const updateSurveyQuestion = function (data, id) {
  return $.ajax({
    url: config.apiOrigin + '/surveys/' + id,
    method: 'PATCH',
    headers: {
      Authorization: `Token token=${store.user.token}`,
    },
    data: data,
  });
};

module.exports = {
  surveyIndex,
  surveyCreate,
  updateSurveyQuestion,
};
