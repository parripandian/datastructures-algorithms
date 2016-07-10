var chai = require('chai');
var expect = chai.expect;

var Array = require('../../../modules/data-structures/data-structures').Array;

var mockData = {
    numberArray: [10, 20, 30, 40, 50, 60]
};

var input = {
    numberArray: []
};

describe('Array', function () {

    beforeEach(function () {
        input.numberArray = [].concat(mockData.numberArray);
    });

    it('printAll', function () {
        var result = Array.printAll(input.numberArray);
        expect(result).to.equal(undefined);
    });

    it('searchByIndex', function () {
        var result = Array.searchByIndex(input.numberArray, 2);
        expect(result).to.equal(30);
    });

    it('searchByValue', function () {
        var result = Array.searchByValue(input.numberArray, 20);
        expect(result).to.equal(1);
    });

    it('insertAtBeginning', function () {
        var newElement = 20;
        var initialArrayLength = input.numberArray.length;

        var result = Array.insertAtBeginning(input.numberArray, newElement);

        expect(result[0]).to.equal(newElement);
        expect(result.length).to.equal(initialArrayLength + 1);
    });

    it('insertAtIndex', function () {
        var newElement = 100;
        var atIndex = 3;
        var initialArrayLength = input.numberArray.length;

        var result = Array.insertAtIndex(input.numberArray, newElement, atIndex);

        expect(result[atIndex]).to.equal(newElement);
        expect(result.length).to.equal(initialArrayLength + 1);
    });

    it('insertAfterIndex', function () {
        var newElement = 250;
        var atIndex = 2;
        var initialArrayLength = input.numberArray.length;

        var result = Array.insertAfterIndex(input.numberArray, newElement, atIndex);

        expect(result[atIndex + 1]).to.equal(newElement);
        expect(result.length).to.equal(initialArrayLength + 1);
    });

    it('insertBeforeIndex', function () {
        var newElement = 500;
        var atIndex = 4;
        var initialArrayLength = input.numberArray.length;

        var result = Array.insertBeforeIndex(input.numberArray, newElement, atIndex);

        expect(result[atIndex - 1]).to.equal(newElement);
        expect(result.length).to.equal(initialArrayLength + 1);
    });

    it('updateAtIndex', function () {
        var newElement = 1000;
        var atIndex = 4;
        var initialArrayLength = input.numberArray.length;

        var result = Array.updateAtIndex(input.numberArray, newElement, atIndex);

        expect(result[atIndex]).to.equal(newElement);
        expect(result.length).to.equal(initialArrayLength);
    });

    it('deleteAtIndex', function () {
        var element = 20;
        var atIndex = 1;
        var initialArrayLength = input.numberArray.length;

        var result = Array.deleteAtIndex(input.numberArray, atIndex);

        expect(result[atIndex]).to.not.equal(element);
        expect(result.length).to.equal(initialArrayLength - 1);
    });
});


