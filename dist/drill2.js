"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.drill2 = void 0;
const string1 = "This is a string";
const string2 = "string";
const string3 = " ";
const re = /ab+c/; // regex literal, equivalent of const re = new RegExp("ab+c"). CanNOT sub expression with: ${}
function drill2(stringOne, stringTwo) {
    //Fill in here
    const re2 = new RegExp(`${stringTwo}`, "g");
    //return [...stringOne.matchAll(re2)].map(item => item.index)
    const arrayCollection = [];
    let array1;
    while ((array1 = re2.exec(stringOne)) !== null) {
        arrayCollection.push(array1.index);
    }
    return arrayCollection;
}
exports.drill2 = drill2;
console.log(drill2(string1, string2));
console.log(drill2(string1, string3));
// write jest test as well. 
