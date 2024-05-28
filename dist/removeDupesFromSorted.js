"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeDuplicatesFromSortedArray = void 0;
function removeDuplicatesFromSortedArray(arr) {
    return arr.filter((value, index, array) => {
        return index === 0 || value !== array[index - 1];
    });
}
exports.removeDuplicatesFromSortedArray = removeDuplicatesFromSortedArray;
