import { describe, it, expect } from "@jest/globals";
import { rootOfCube } from "../drill3";

//Return the squarert of the cube of a number, to 2 decimal points, tamped down to 10 if lower than 10.

// sqrt of 125 is 11.180339
// sqrt of 64 is 8

describe("It does square root of cube tamped correctly", () => {
        it("does it for 5", ()=>{
            expect(rootOfCube(5)).toBe(11.18);
        });

        it("does it for 4", ()=>{
            expect(rootOfCube(4)).toBe(10);
        });
});