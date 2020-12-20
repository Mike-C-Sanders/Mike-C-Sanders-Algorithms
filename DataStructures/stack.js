/**
 * 
 * To better familiarize myself with stacks. I build this program to analyze a few methods and implementations
 * 
 */

 //create a new node assigning value and then point to the next node.
class Node{
    constructor(value, nextNode){
        this.value = value;
        this.nextNode = nextNode;
    }
}

 class Stack{
     constructor(){
         this.top = null;
     }

     push(value){
         let node = new Node(value, this.top);
         this.top = node;

         this.print();

     }

     pop(){
         let value = null;
         this.print();
         if(this.top){
             value = this.top.value;
             this.top = this.top.nextNode;
         }
         
         return value;
     }

     print(){
         let p = this.top;
         while(p){
             console.log(p.value);
             p = this.nextNode;
         }
     }

 }

 let stack = new Stack;

 stack.push(1);
 stack.push(2);
 stack.push(3);
 stack.push(4);
 stack.push(5);
 stack.push(6);

stack.pop();
stack.pop();
stack.pop();
stack.pop();
stack.pop();
stack.pop();
stack.pop();


stack.print();