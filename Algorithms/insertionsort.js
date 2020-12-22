/**
 * Similar to selection sort. The difference is iteration i, swap a[i] with each larger entry to its left
 * Best case is O(N -1)
 * Worst case is O(1/4 N^2)
 * Runs in linear time when there's a partially sortted array.
 */

 function insertionSort(array){
    let len = array.length;
    let j = 0;
    let swap = 0;
    let index = 0;
    for(let i = 0; i < len; i++){
        j = i+1;
        index = i;
        while(array[index] > array[j]){
            swap = array[j];
            array[j] = array[index];
            array[index] = swap;
            j = index;
            index--;
        }

    }
    return array;

 }
let a = [5,2,8,7,11,4, 32, 1,3,2 ];;

console.log(a);
a = insertionSort(a);

console.log(a);