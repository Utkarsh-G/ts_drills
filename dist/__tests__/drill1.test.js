"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const globals_1 = require("@jest/globals");
const drill1_1 = require("../drill1");
(0, globals_1.describe)("tests 3 slicer", () => {
    const array1 = [1, 2, 3, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
    const indexArraw = [2, 4, 6];
    (0, globals_1.it)("tests against the given arrays.", () => {
        const result = (0, drill1_1.get3Slicer)(array1, indexArraw);
        // expect(result.toString()).toBe(`3,7,8,8,9,10,10,11,12`)
        // expect(result[0].toString()).toBe(`3,7,8`)
        (0, globals_1.expect)(result[0]).toEqual([3, 7, 8]);
        (0, globals_1.expect)(result).toEqual([[3, 7, 8], [8, 9, 10], [10, 11, 12]]);
    });
});
