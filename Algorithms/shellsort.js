/**
 * Move entries mroe than one position at a time by h-sorting the array
 * an h -sorted array is h interleaved sorted subsequences. 
 * How to h-sort an array?
 *      Insertion sort, with stride length h.
 * The question is how many to increment. When we increment by 2, we don't gain the efficiency to use shell sort. 
 * Find the increment sequence then decrease h by that size each time.
 * 
 * The below shellsort is done using 3x+1 Knuth's sequence
 * 
 * Big O(nlogn)
 */

 function ShellSort(array){
     let len = array.length;
     let h = 1;
     let swap= 0; //tempary value varriable used to swap values.

    //set the maximum increment value o, while we add 3x+1
     while(h < Math.floor(len/3)){
         console.log(h);
         h = (3*h)+1; //3x+1 increment sequence. 
         console.log(h);
     }
     //loop is set to sequence until we run out of h incremental values to use.
     while(h>=1){
         //set i = h to loop through each value of h while less than the total array length.
         for(let i = h; i < len; i++){
             swap = array[i];
             let j;
             for(j = i; j>=h && array[j-h] > swap; j-=h ){
                array[j] = array[j-h];
             }
             array[j] = swap;
         }

        h = Math.floor(h/3);
     }

 }

 let a = [5,2,8,7,11,4, 32, 1,3,2 , 20, 18, 54, 9, 13,16,12]; //using a larger array to get a better data sequence set.
console.log(a);
 ShellSort(a);
 console.log(a);