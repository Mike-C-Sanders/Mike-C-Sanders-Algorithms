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

 //exchange function
function exchange(arr, i, j){
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    return arr;
}
//Function for partition phase I
 function partitionQS(arr, lo, hi){
     let i = 0, j =hi;
     while(true){
         //find item on the left of the array to swap
         while(arr[i] < arr[lo]){
             if(i === hi) break;
             i++;
         }
         //find item on the right of the array to swap
         while(arr[j] > arr[lo]){
             if(j === lo) break; 
             j--;
         }
         //check if the pointers ever cross. Break if they do
         if(i >= j) break;
         //swap
         exchange(arr, i, j);
     }
     //swap with partitioning item
    exchange(arr, j, lo);
    //return index of item now known to be in place
    return j;
     
 }
//Fisher Yates shuffle sort - https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle#Fisher_and_Yates'_original_method
 function shuffle(arr){
     for(let i = arr.length -1; i > 0; i--){
         const j = Math.floor(Math.random()* i);
         exchange(arr, i, j);
     }
     return arr;

 }
//recursively sort the array
function qSort(arr, lo, hi){
    if(hi <= lo) return;
    let j = partitionQS(arr, lo, hi);
    qSort(arr, lo, j-1);
    qSort(a, j+1, hi);
}


let a = [4,1,3,-5,-12,33,22,3,65,106,-77,-3,-6,7,2,9,44,32,35,-99,-91,90];
console.log(a);
a = shuffle(a);
console.log(a);
a = qSort(a, 0, a.length-1);
console.log(a);