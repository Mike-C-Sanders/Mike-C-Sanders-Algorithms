/**
 * Basic plan: 
 * 1. shuffle array - super important
 * 2. partition so that for some j
 *  - entry [j] is in place
 * - no larger entry to the left of j
 * - no smaller entry to the right of j
 * 3. Sort each piece recursively.
 * 
 * Sir Charles Antony Richard Hoare - 1980 Turing award
 * 
 * Phase I. Partitioning - repeat until i and j pointers cross
 * - scan i from left to right so long as (a[i] < a[lo])
 * - Scan j from right to left so long as (a[j] > a[lo])
 * - Exchange a[i] with a[j]
 * 
 * Phase II. When pointers cross
 * - Exchange a[lo] with a[j]
 */

//first step is to create our partition function

 function partition(array, start, end){
//Taking the last element as the pivot
    const pivotPoint = array[end];
    let pivotIndex = start;
    for(let i = start ; i < end; i++){
        if(array[i] < pivotPoint){
            //perform a swap
            [array[i], array[pivotIndex]] = [array[pivotIndex], array[i]];
            //move pivot to next element.
            pivotIndex++;
        }
    }
    //Putting the pivot value in the middle
    [array[pivotIndex], array[end]] = [array[end], array[pivotIndex]];
    return pivotIndex;

 }

 //recursive implementation

 function quickSortR(array, start, end){
     //basecase to end the recurssoin
    if(start >= end) return;

    let index = partition(array, start, end);

    quickSortR(array, start, index-1);
    quickSortR(array, index+1, end);

 }
//Fisher Yates shuffle sort - https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle#Fisher_and_Yates'_original_method
function shuffle(arr){
    for(let i = arr.length -1; i > 0; i--){
        const j = Math.floor(Math.random()* i);
        exchange(arr, i, j);
    }
    return arr;

}

let a = [7, -2, 4, 1, 6, 5, 0, -4, 2, 5, 11, 32, 105, -43, 8];
a = shuffle(a);
quickSortR(a, 0, a.length - 1);

console.log(a)
