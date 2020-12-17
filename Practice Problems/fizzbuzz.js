/**
 * The Problem.
 * 
 * Write a short program that prints each number from 1 to 100 on a new line. 

For each multiple of 3, print "Fizz" instead of the number. 

For each multiple of 5, print "Buzz" instead of the number. 

For numbers which are multiples of both 3 and 5, print "FizzBuzz" instead of the number.
 */
function fizzBuzz(input){
  
  for(let i =0; i < input; i++){
        if(input%3 === 0 && input%5 === 0){
            console.log('FizzBuzz');
        }
        else if(input%5 === 0){
            console.log('Buzz');
        }
        else if(input%3 === 0){
            console.log('Fizz');
        }
  }
}

fizzBuzz(100);

fizzBuzz(200);
