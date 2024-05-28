"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeIntoNumberArrayRecursively = exports.makeNumberArrayIntoLinkedList = exports.mergeTwoLists = exports.ListNode = void 0;
// Definition for singly-linked list.
class ListNode {
    constructor(val, next) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}
exports.ListNode = ListNode;
// Extremely functional approach.
// Recursion, maps, curried functions. Not even a variable number or string.
function mergeTwoLists(list1, list2) {
    if (list1 === null) {
        return list2;
    }
    else if (list2 === null) {
        return list1;
    }
    const arr1 = makeIntoNumberArrayRecursively(list1);
    const arr2 = makeIntoNumberArrayRecursively(list2);
    arr1.forEach((val) => {
        arr2.splice(makeIndexSearcherForThisArray(arr2)(val), 0, val);
    });
    return makeNumberArrayIntoLinkedList(arr2);
}
exports.mergeTwoLists = mergeTwoLists;
;
function makeIndexSearcherForThisArray(arr) {
    return function (val) {
        return arr.reduce((acc, curr) => {
            if (val > curr)
                return ++acc;
            return acc;
        }, 0);
    };
}
function makeNumberArrayIntoLinkedList(arr) {
    return arr.reduceRight((acc, curr) => {
        return new ListNode(curr, acc);
    }, null);
}
exports.makeNumberArrayIntoLinkedList = makeNumberArrayIntoLinkedList;
function makeIntoNumberArrayRecursively(firstNode) {
    if (firstNode === null)
        return [];
    else
        return [firstNode.val, ...makeIntoNumberArrayRecursively(firstNode.next)];
}
exports.makeIntoNumberArrayRecursively = makeIntoNumberArrayRecursively;
