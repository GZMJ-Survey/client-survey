'use strict';

const successIndex = (data) => {
  console.log(data.surveys.length);
  for(let i=0;i<data.surveys.length;i++){
    $('.index-display').append(JSON.stringify((data.surveys)[i].question) + "<br>");
  }
};

const failureIndex = (error) => {
  console.error(error);
};

module.exports = {
  successIndex,
  failureIndex,
};
