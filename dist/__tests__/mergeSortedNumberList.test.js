"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const globals_1 = require("@jest/globals");
const mergeSortedNumberList_1 = require("../mergeSortedNumberList");
(0, globals_1.describe)("Test the merge sorting of linked lists", () => {
    const testArr1 = [1, 3, 5, 9];
    const testArr2 = [2, 4, 5, 6];
    const testResult = [1, 2, 3, 4, 5, 5, 6, 9];
    const node1 = (0, mergeSortedNumberList_1.makeNumberArrayIntoLinkedList)(testArr1);
    const node2 = (0, mergeSortedNumberList_1.makeNumberArrayIntoLinkedList)(testArr2);
    (0, globals_1.it)("Should merge two non-null lists correctly", () => {
        (0, globals_1.expect)((0, mergeSortedNumberList_1.makeIntoNumberArrayRecursively)((0, mergeSortedNumberList_1.mergeTwoLists)(node1, node2))).toEqual(testResult);
    });
    (0, globals_1.it)("Should handle one null list correctly", () => {
        (0, globals_1.expect)((0, mergeSortedNumberList_1.makeIntoNumberArrayRecursively)((0, mergeSortedNumberList_1.mergeTwoLists)(null, node2))).toEqual(testArr2);
    });
    (0, globals_1.it)("Should handle both null lists correctly", () => {
        (0, globals_1.expect)((0, mergeSortedNumberList_1.makeIntoNumberArrayRecursively)((0, mergeSortedNumberList_1.mergeTwoLists)(null, null))).toEqual([]);
    });
});
