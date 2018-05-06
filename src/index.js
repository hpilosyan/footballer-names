const uniqueRandomArray = require('unique-random-array');
const footballerNames = require('./footballer-names.json');
const getRandomItem = uniqueRandomArray(footballerNames);

module.exports = {
  all: footballerNames,
  random: random,
};

function random(number) {
  if (number === undefined) {
    return getRandomItem();
  }

  const randomItems = [];
  for (let i = 0; i < number; i++) {
    randomItems.push(getRandomItem());
  }
  return randomItems;
}