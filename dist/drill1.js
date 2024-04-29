"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.get3Slicer = void 0;
const array1 = [1, 2, 3, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
const indexArraw = [2, 4, 6];
function get3Slicer(arr1, arr2) {
    let resultArray = [];
    arr2.forEach((index) => {
        // slice(): start (inclusive), end (exclusive). negative numbers count from end of array.
        resultArray.push(arr1.slice(index, index + 3));
    });
    return resultArray;
}
exports.get3Slicer = get3Slicer;
