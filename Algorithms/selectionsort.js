/**
 * Selection sort practice
 * In iteration i, find index min of smallest remaining emtry
 * Swap [i] and a[min]
 */

 function SelectionSort(array){
    let min = 0;
    let swap = 0;
    let len = array.length;

    for(let i = 0; i< len; i++){
        min = i;
        for(let j = i+1; j< len;j++){
            if(array[min]> array[j]){
                min = j;
            }

        }
        if(min !== i){
            swap = array[i];
            array[i] = array[min];
            array[min] = swap;
        }

    }
    return array;
 }

 let a = [3,5,6,7,11,4, 32, 1,3 ];
console.log(a);
 a = SelectionSort(a);
 console.log(a);

