'use strict';

module.exports = {
    generateRandomTaskContent
};

const Faker = require('faker');

function generateRandomTaskContent(userContext, events, done) {
  // generate data with Faker:
  const taskContent = `${Faker.random.words()}`;
  const otherContent = `${Faker.random.words()}`;

  // add variables to virtual user's context:
  userContext.vars.taskContent = taskContent;
  userContext.vars.otherContent = otherContent;
  
  // continue with executing the scenario:
  return done();
}