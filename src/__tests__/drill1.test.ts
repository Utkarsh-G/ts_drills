import { describe, it, expect } from "@jest/globals";
import { get3Slicer } from "../drill1";

describe ("tests 3 slicer", () => {
    const array1: number[] = [1, 2, 3, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
    const indexArraw: number[] = [2, 4, 6];

    it("tests against the given arrays.", () => {
        const result = get3Slicer(array1, indexArraw);
        // expect(result.toString()).toBe(`3,7,8,8,9,10,10,11,12`)
        // expect(result[0].toString()).toBe(`3,7,8`)
        expect(result[0]).toEqual([3, 7, 8]);
        expect(result).toEqual([[3, 7, 8], [8, 9, 10], [10, 11, 12]]);
    })
})