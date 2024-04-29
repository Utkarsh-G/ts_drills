import { describe, it, expect } from "@jest/globals";
//import { test } from "node:test";
import { drill2 } from "../drill2";

const string1 = "This is a string";
const string2 = "string";
const string3 = " ";

//test('drill test 2', ())

// write jest test as well. 
describe ('drill test 2', ()=>{
    it('finds one substring if exists', ()=> {
        expect(drill2(string1,string2).toString()).toBe([10].toString())
    });

    it('finds multiple substrings if exists', ()=> {
        expect(drill2(string1,string3).toString()).toBe([4,7,9].toString())
    });

    it('test toBe', ()=> {
        expect(3).toBe(1+2)
    });

    it('finds no substring if it does not exists', ()=> {
        expect(drill2(string2,string3).toString()).toBe([].toString())
    });
})
