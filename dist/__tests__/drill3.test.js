"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const globals_1 = require("@jest/globals");
const drill3_1 = require("../drill3");
//Return the squarert of the cube of a number, to 2 decimal points, tamped down to 10 if lower than 10.
// sqrt of 125 is 11.180339
// sqrt of 64 is 8
(0, globals_1.describe)("It does square root of cube tamped correctly", () => {
    (0, globals_1.it)("does it for 5", () => {
        (0, globals_1.expect)((0, drill3_1.rootOfCube)(5)).toBe(11.18);
    });
    (0, globals_1.it)("does it for 4", () => {
        (0, globals_1.expect)((0, drill3_1.rootOfCube)(4)).toBe(10);
    });
});
