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
  })
});