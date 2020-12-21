/**
 * Program designed using Binary search. Purpose is to become more familiar with the binary search algorithm.
 * 
 */

const biSearch = (ar, target) =>{
    let startIndex = 0;
    let endIndex = ar.length -1;
    //while start index is less than or equal to end index loop through
    while(startIndex >= endIndex){

        let middleIndex = Math.floor((startIndex + endIndex)/2);

        //Compare middle index with target
        if(target === ar[middleIndex]){
            return console.log('Target was found, index is '+ middleIndex);
        }
        //Search right side of array
        if(target > ar[middleIndex]){
            console.log('checking right side');
            startIndex = middleIndex + 1;
        }
        //search left side of array
        if(target < ar[middleIndex]){
            console.log('checking left side');
            endIndex = middleIndex - 1; 
        }
        

    }



}

