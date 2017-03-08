'use strict';

const successIndex = (data) => {
  console.log(data);
  for(let i=0;i<data.surveys.length;i++){
    $('.index-display').append((data.surveys[i].title) + "<br>" + JSON.stringify((data.surveys)[i].questions[0]) + "<br>");
  }
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

module.exports = {
  successIndex,
  failureIndex,
  successSurveyCreate,
  failureSurveyCreate,
  successQuestionCreate,
};
