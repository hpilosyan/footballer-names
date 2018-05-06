const uniqueRandomArray = require('unique-random-array');
const footballerNames = require('./footballer-names.json');

module.exports = {
  all: footballerNames,
  random: uniqueRandomArray(footballerNames),
};