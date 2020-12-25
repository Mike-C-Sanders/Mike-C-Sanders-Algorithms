/**
 * Basic idea is to divide an array into two halves. Recursively sort each half and merge the two haves.
 * Merge sort uses divide and conquer to sort a list of items or elements.
 * Merge sort is fast NlogN.
 * It does use extra space propotional to N. 
 * Merge sort is one of the most important algorithms to understand. It's used in a wide variety of applications.
 */

//Primary merge sort function
function mergeSort(unsorted){
    //If the array has one element then we'll want to return the unsorted array.
    if(unsorted.length <= 1) return unsorted;

    //determine the middle of the array
    const mid = Math.floor(unsorted.length/2);

    //divide the array into left and right halves
    const left = unsorted.slice(0, mid);
    const right = unsorted.slice(mid);
    
    //recursion to combine the left and the right
    return merge(
        mergeSort(left), mergeSort(right)
    );

}

//function to merge the two arrays together.
function merge(left, right){
    let resultArray = [], leftIndex = 0, rightIndex = 0;

    while(leftIndex < left.length && rightIndex < right.length){
        if(left[leftIndex] < right[rightIndex]){
            resultArray.push(left[leftIndex]);
            leftIndex++;
        }
        else{
            resultArray.push(right[rightIndex]);
            rightIndex++;
        }
    }
    return resultArray.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

let a = [-3, 12, -16, 4, 23, 2, 5, 6, 13, -9, -44, 40, 44, 66, 1];

console.log(a);

a = mergeSort(a);

console.log(a);