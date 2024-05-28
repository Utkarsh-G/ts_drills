import {describe, it, expect} from '@jest/globals';
import { removeDuplicatesFromSortedArray } from '../removeDupesFromSorted';


describe("Test the removal of duplicates", ()=>{
    //arrange
    let arr1 = [1, 2, 3, 3, 3, 3, 4];
    let arr1Withoutduplicates = [1, 2, 3, 4];

    it("should remove duplice numbers in a sorted list", ()=>{
        //act + assert
        expect(removeDuplicatesFromSortedArray(arr1)).toEqual(arr1Withoutduplicates);
    });
});