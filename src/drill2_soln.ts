//import {describe, it, expect} from '@jest/globals';

const string1 = "This is a string";
const string2 = "string";
const string3 = " ";



export function drill2(stringOne: string, stringTwo: string): number[]{
    //Fill in here
    const reg = new RegExp(stringTwo, 'gi');

    return [...stringOne.matchAll(reg)].map(item => item.index)

}

console.log(drill2(string1, string2))
console.log(drill2(string1, string3))

