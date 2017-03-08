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

module.exports = {
  surveyIndex,
};
