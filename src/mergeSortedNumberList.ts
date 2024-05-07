
 // Definition for singly-linked list.
 export class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
 }
 

// Extremely functional approach.
// Recursion, maps, curried functions. Not even a variable number or string.

export function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {

    if (list1 === null) {
        return list2;
    } else if (list2 === null) {
        return list1;
    }
    
    const arr1 = makeIntoNumberArrayRecursively(list1);
    const arr2 = makeIntoNumberArrayRecursively(list2);

    arr1.forEach((val) => {
        arr2.splice(makeIndexSearcherForThisArray(arr2)(val), 0, val);
    })

    return makeNumberArrayIntoLinkedList(arr2);
};

function makeIndexSearcherForThisArray(arr: number[]): (val: number) => number {
    return function (val: number): number {
        return arr.reduce((acc, curr)=>{
            if (val > curr) return ++acc;
            return acc;
        }, 0)
    }
}


export function makeNumberArrayIntoLinkedList(arr: any[]): ListNode {
    return arr.reduceRight((acc, curr)=>{
        return new ListNode(curr, acc);
    }, null);
}

export function makeIntoNumberArrayRecursively(firstNode: ListNode | null): number[]{
    if (firstNode === null) return [];
    else return [firstNode.val, ...makeIntoNumberArrayRecursively(firstNode.next)];
}
