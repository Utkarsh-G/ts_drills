const array1: number[] = [1, 2, 3, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
const indexArraw: number[] = [2, 4, 6]

export function get3Slicer (arr1: number[], arr2: number[]): number[][] {

    let resultArray: number[][] = []


    arr2.forEach( (index) => {
        // slice(): start (inclusive), end (exclusive). negative numbers count from end of array.
        resultArray.push(arr1.slice(index, index+3))
    })

    return resultArray
}