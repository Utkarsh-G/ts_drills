
import { describe, it, expect } from "@jest/globals"
import { mergeTwoLists, makeNumberArrayIntoLinkedList, makeIntoNumberArrayRecursively } from "../mergeSortedNumberList";




describe("Test the merge sorting of linked lists", () => {

    const testArr1: number[] = [1, 3, 5, 9];
    const testArr2: number[] = [2, 4, 5, 6];
    const testResult: number[] = [1, 2, 3, 4, 5, 5, 6, 9];
    
    const node1 = makeNumberArrayIntoLinkedList(testArr1);
    const node2 = makeNumberArrayIntoLinkedList(testArr2);

    it("Should merge two non-null lists correctly", () => {
        expect(makeIntoNumberArrayRecursively(mergeTwoLists(node1, node2))).toEqual(testResult);
    });

    it("Should handle one null list correctly", () => {
        expect(makeIntoNumberArrayRecursively(mergeTwoLists(null, node2))).toEqual(testArr2);
    });

    it("Should handle both null lists correctly", () => {
        expect(makeIntoNumberArrayRecursively(mergeTwoLists(null, null))).toEqual([]);
    });

});
