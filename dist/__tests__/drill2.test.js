"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const globals_1 = require("@jest/globals");
//import { test } from "node:test";
const drill2_1 = require("../drill2");
const string1 = "This is a string";
const string2 = "string";
const string3 = " ";
//test('drill test 2', ())
// write jest test as well. 
(0, globals_1.describe)('drill test 2', () => {
    (0, globals_1.it)('finds one substring if exists', () => {
        (0, globals_1.expect)((0, drill2_1.drill2)(string1, string2).toString()).toBe([10].toString());
    });
    (0, globals_1.it)('finds multiple substrings if exists', () => {
        (0, globals_1.expect)((0, drill2_1.drill2)(string1, string3).toString()).toBe([4, 7, 9].toString());
    });
    (0, globals_1.it)('test toBe', () => {
        (0, globals_1.expect)(3).toBe(1 + 2);
    });
    (0, globals_1.it)('finds no substring if it does not exists', () => {
        (0, globals_1.expect)((0, drill2_1.drill2)(string2, string3).toString()).toBe([].toString());
    });
});
