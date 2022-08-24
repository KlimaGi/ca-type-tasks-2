"use strict";
class ListNode {
    data;
    next;
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}
;
class List {
    head;
    tail;
    constructor(data) {
        if (data !== undefined) {
            this.head = new ListNode(data);
            this.tail = this.head;
        }
        else {
            this.head = null;
            this.tail = null;
        }
    }
    unshift = (data) => {
        const newNode = new ListNode(data);
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            newNode.next = this.head;
            this.head = newNode;
        }
    };
    push = (data) => {
        const newNode = new ListNode(data);
        if (this.tail === null) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
    };
    forEach = (callback) => {
        if (this.head === null)
            return;
        let currentNode = this.head;
        while (true) {
            if (currentNode.next === null)
                break;
            callback(currentNode.data);
            currentNode = currentNode.next;
        }
    };
}
const stringList = new List();
const numberList = new List(5);
console.group('1. Sukurkitę sąrašo mazgo struktūrą ListNode, bet kokiam duomenų tipui');
{
    const stringNode1 = { data: 'step', next: null };
    const stringNode2 = { data: 'forward', next: stringNode1 };
    console.log('stringNode1', stringNode1);
    console.log('stringNode2', stringNode2);
}
console.groupEnd();
console.group('2. Sukurkite sąrašo klasę List');
{
    console.log('empty string list', stringList);
    console.log('number list', numberList);
}
console.groupEnd();
console.group('3. Sukurkite metodą pridėti elementui į sąrašo priekį.');
{
    console.log('string list', stringList);
}
console.groupEnd();
console.group('4. Sukurkite metodą pridėti elementui į sąrašo galą.');
{
}
console.groupEnd();
console.group('5. Sukurkite metodą List.forEach klasėje List, kuris vykdytų parametru perduotą funkciją');
{
}
console.groupEnd();
//# sourceMappingURL=main.js.map