const expect = require('chai').expect;
const footballers = require('./index');

describe('footballer-names', function () {
  describe('all', function() {
    it('should be an array of strings', function () {
      expect(footballers.all).to.satisfy(isArrayOfStrings);

      function isArrayOfStrings(array) {
        return array.every(function (item) {
          return typeof item === 'string';
        });
      }
    });
  });

  describe('random', function() {
    it('should return a random item from', function () {
      const randomItem = footballers.random();
      expect(footballers.all).to.include(randomItem);
    });

    it('should return an array of random items if passed a number', function () {
      const randomItems = footballers.random(3);
      expect(randomItems).to.have.length(3);
      randomItems.forEach(function(item) {
        expect(footballers.all).to.include(item);
      });
    });
  })
});