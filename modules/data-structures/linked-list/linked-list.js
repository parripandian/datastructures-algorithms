(function () {
    'use strict';

    module.exports = function () {
        this.head = null;
        this.length = 0;

        this.addFirst = addFirst;
        this.addLast = addLast;
        this.toArray = toArray;
        this.removeFirst = removeFirst;
        this.removeLast = removeLast;
        this.add = add;
    };

    function node(data) {
        return {
            data: data,
            next: null
        }
    }

    function addFirst(data) {
        if (!this.head) {
            this.head = node(data);
        } else {
            var currentNode = node(data);
            currentNode.next = this.head;
            this.head = currentNode;
        }
        this.length++;
    }

    function addLast(data) {
        var newNode = node(data);
        this.length++;

        if (!this.head) {
            this.head = newNode;
            return;
        }

        var currentNode = this.head;
        while (currentNode.next !== null) {
            currentNode = currentNode.next;
        }

        currentNode.next = newNode;
    }

    function toArray() {
        var allNodes = [];

        var currentNode = this.head;
        allNodes.push(currentNode.data);

        while (currentNode.next !== null) {
            currentNode = currentNode.next;
            allNodes.push(currentNode.data);
        }

        return allNodes;
    }

    function removeFirst() {
        if (!this.head) {
            return;
        }

        this.head = this.head.next;

        this.length--;
    }

    function removeLast() {
        if (!this.head) {
            return;
        }

        var currentNode = this.head;
        var previousNode = {};
        while (currentNode.next !== null) {
            previousNode = currentNode;
            currentNode = currentNode.next;
        }

        previousNode.next = null;
        this.length--;
    }

    /**
     Appends the specified element to the end of this list.
     */
    function add(data) {
        var newNode = node(data);
        this.length++;

        var currentNode = this.head;

        if (!currentNode) {
            currentNode = newNode;
            return;
        }

        while (currentNode.next !== null) {
            currentNode = currentNode.next;
        }

        currentNode.next = newNode;
    }

    /*
     function addNode(data, currentNode) {

     if (!currentNode) {
     currentNode = node(data);
     } else {
     currentNode.next = node(data);
     }

     // this.length++;
     }
     */

})();