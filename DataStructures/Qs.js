/**
 * This program is designed to model the Queue data structure. Looking at the enqueue and dequeue methods.
 * 
 */

 class Queue{
     constructor(){
         this.list = [];
     }
     // Functions to be implemented 
    // enqueue(item) 
    enqueue(item){
        this.list.push(item);

    }
    // dequeue() 
    dequeue(){
        if(this.isEmpty()){
            return;
        }
        return this.list.shift();
    }

    // front() 
    front(){
        if(this.isEmpty()){
            return "Nope";
        }
        return this.list[0];
    }
    // Check if the queue is empty or not.
    isEmpty(){
        return this.list.length == 0; 
    } 
    // printQueue() 
 }

 let q = new Queue;
