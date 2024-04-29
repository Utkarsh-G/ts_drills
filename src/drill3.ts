//Return the squarert of the cube of a number, to 2 decimal points, tamped down to 10 if lower than 10.

// sqrt of 125 is 11.180339
// sqrt of 64 is 8

export function rootOfCube(num: number): number {
    // setup
    return Math.max(10, Number.parseFloat(Math.sqrt(Math.pow(num,3)).toFixed(2))) // or could write: num ** 3 
    
}