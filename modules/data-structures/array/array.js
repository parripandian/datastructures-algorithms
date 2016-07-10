(function () {
    'use strict';

    module.exports = {
        insertAtBeginning: insertAtBeginning,
        insertAtIndex: insertAtIndex,
        insertAfterIndex: insertAfterIndex,
        insertBeforeIndex: insertBeforeIndex,
        searchByValue: searchByValue,
        searchByIndex: searchByIndex,
        printAll: printAll,
        deleteAtIndex: deleteAtIndex,
        updateAtIndex: updateAtIndex
    };

    function insertAtBeginning(values, newElement) {
        for (var index = values.length - 1; index > -1; index--) {
            values[index + 1] = values[index];
        }

        values[0] = newElement;
        return values;
    }

    function insertAfterIndex(values, newElement, atIndex) {
        for (var index = values.length - 1; index > atIndex; index--) {
            values[index + 1] = values[index];
        }

        values[atIndex + 1] = newElement;
        return values;
    }

    function insertAtIndex(values, newElement, atIndex) {
        for (var index = values.length - 1; index >= atIndex; index--) {
            values[index + 1] = values[index];
        }

        values[atIndex] = newElement;
        return values;
    }

    function insertBeforeIndex(values, newElement, atIndex) {

        for (var index = values.length - 1; index >= atIndex - 1; index--) {
            values[index + 1] = values[index];
        }

        values[atIndex - 1] = newElement;
        return values;
    }

    function searchByValue(values, atValue) {
        var elementIndex = '';
        values.forEach(function (element, index) {
            if (element === atValue) {
                elementIndex = index;
            }
        });

        return elementIndex;
    }

    function searchByIndex(values, atIndex) {
        var elementAtIndex = 0;
        values.forEach(function (element, index) {
            if (index === atIndex) {
                elementAtIndex = element;
            }
        });

        return elementAtIndex;
    }

    function printAll(values) {
        values.forEach(function (element, index) {
            console.log(index + ' - ' + element);
        });
    }

    function deleteAtIndex(values, atIndex) {
        for(var index = atIndex; index < values.length; index++) {
            values[index] = values[index + 1];
        }

        values.pop();
        return values;
    }

    function updateAtIndex(values, newElement, atIndex) {
        values[atIndex] = newElement;
        return values;
    }

})();