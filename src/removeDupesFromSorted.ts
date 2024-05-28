export function removeDuplicatesFromSortedArray(arr: number[]): number[] {
    return arr.filter((value, index, array) => {
        return index === 0 || value !== array[index - 1];
    });
}