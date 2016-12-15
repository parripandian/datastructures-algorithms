var chai = require('chai');
var expect = chai.expect;

var LinkedList = require('../../../modules/data-structures/data-structures').LinkedList;

var mockData = {
    nodes: ['Google', 'Facebook', 'LinkedIn', 'Amazon']
};

describe('LinkedList', function () {

    it('init LinkedList', function () {
        var linkedList = new LinkedList();

        expect(linkedList.head).to.be.a('null');
        expect(linkedList.length).to.equal(0);
    });

    it('addFirst', function () {
        var linkedList = new LinkedList();
        linkedList.addFirst(mockData.nodes[0]);
        linkedList.addFirst(mockData.nodes[1]);
        linkedList.addFirst(mockData.nodes[2]);
        linkedList.addFirst(mockData.nodes[3]);

        expect(linkedList.head.data).to.equal(mockData.nodes[3]);
        expect(linkedList.length).to.equal(4);
    });

    it('addLast', function () {
        var linkedList = new LinkedList();
        linkedList.addLast(mockData.nodes[0]);
        linkedList.addLast(mockData.nodes[1]);
        linkedList.addLast(mockData.nodes[2]);

        expect(linkedList.head.data).to.equal(mockData.nodes[0]);
        expect(linkedList.length).to.equal(3);
    });

    it('toArray', function () {
        var linkedList = new LinkedList();
        linkedList.addLast(mockData.nodes[0]);
        linkedList.addLast(mockData.nodes[1]);

        var result = linkedList.toArray();

        expect(result[0]).to.equal(mockData.nodes[0]);
        expect(result.length).to.equal(2);
    });

    it('removeFirst', function () {
        var linkedList = new LinkedList();
        linkedList.addFirst(mockData.nodes[0]);
        linkedList.addFirst(mockData.nodes[1]);
        linkedList.addFirst(mockData.nodes[2]);

        linkedList.removeFirst();
        // console.log(linkedList.toArray());

        expect(linkedList.head.data).to.equal(mockData.nodes[1]);
        expect(linkedList.length).to.equal(2);
    });

    it('removeLast', function () {
        var linkedList = new LinkedList();
        linkedList.addLast(mockData.nodes[0]);
        linkedList.addLast(mockData.nodes[1]);
        linkedList.addLast(mockData.nodes[2]);
        linkedList.addLast(mockData.nodes[3]);

        linkedList.removeLast();

        expect(linkedList.head.data).to.equal(mockData.nodes[0]);
        expect(linkedList.length).to.equal(3);
    });

    it('add', function () {
        var linkedList = new LinkedList();
        linkedList.add(mockData.nodes[0]);
        linkedList.add(mockData.nodes[1]);
        linkedList.add(mockData.nodes[2]);
        linkedList.add(mockData.nodes[3]);

        console.log(linkedList.toArray());

        expect(linkedList.head.data).to.equal(mockData.nodes[0]);
        expect(linkedList.length).to.equal(4);
    });

});


