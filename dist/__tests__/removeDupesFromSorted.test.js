"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const globals_1 = require("@jest/globals");
const removeDupesFromSorted_1 = require("../removeDupesFromSorted");
(0, globals_1.describe)("Test the removal of duplicates", () => {
    //arrange
    let arr1 = [1, 2, 3, 3, 3, 3, 4];
    let arr1Withoutduplicates = [1, 2, 3, 4];
    (0, globals_1.it)("should remove duplice numbers in a sorted list", () => {
        //act + assert
        (0, globals_1.expect)((0, removeDupesFromSorted_1.removeDuplicatesFromSortedArray)(arr1)).toEqual(arr1Withoutduplicates);
    });
});
