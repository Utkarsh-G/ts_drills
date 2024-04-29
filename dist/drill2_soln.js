"use strict";
//import {describe, it, expect} from '@jest/globals';
Object.defineProperty(exports, "__esModule", { value: true });
exports.drill2 = void 0;
const string1 = "This is a string";
const string2 = "string";
const string3 = " ";
function drill2(stringOne, stringTwo) {
    //Fill in here
    const reg = new RegExp(stringTwo, 'gi');
    return [...stringOne.matchAll(reg)].map(item => item.index);
}
exports.drill2 = drill2;
console.log(drill2(string1, string2));
console.log(drill2(string1, string3));
