var arrays = require('./hw2.js');
var assert = require('assert');
describe('array methods test', function(){
    it('should equal all animals less than 4', function(){
        assert.equal(arrays.pluralArray, ['pigs', 'cows', 'cats', 'dogs', 'zebras', 'lions']);
    });
});