/**
 * Linked List data type creatd in JS. Goal is to have a better understanding of the data structure fundamentals and add a few methods 
 
 * Linked Lists are easy ways to link elements. 
 * Advantage of a linkedlist is insert and delet can be quick
 * 0(1) prepend or 0(n)
 * Disadvantages are slow because you have to go through each individual element
 * 1 -> 3 -> 4 ->12 etc.
 */
class Node {
    constructor(data, next = null){
        this.data = data;
        this.next = next;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
        this.size =0;
    }

    //insert first node
    insertFirst(data){
        this.head = new Node(data, this.head);
        this.size++;
    }

    //insert last node
    insertLastNode(data){
        let node = new Node(data);
        let current;

        //If empty make the head
        if(!this.head){
             this.head = node;
        }
        else{
            current = this.head;
            while(current.next){
                current = current.next;
            }
            current.next = node;
        }
        this.size++;
    }
    //insert at index
    insertAt(data, position){
        //If index is out of range
        if (position > 0 && position > this.size){
            return;
        }
        else if(position === 0){
            this.insertFirst(data);
        }
        const node = new Node(data);
        let current, previous;

        //Set current to first
        current = this.head;
        let count = 0;

        while(count < position){
            previous = current; //node before index that we want to insert
            count++;
            current = current.next; //Node after index
        }
        node.next = current;
        previous.next = node;

        this.size++;
    }
    //get at index
    getIndex(index){
        let current = this.head;
        let count = 0;
        while(current){
            if(count == index){
                console.log('Index value is ' + current.data);
            }
            count++;
            current = current.next;
        }
        return;
    }
    //Remove index
    removeIndex(index){
        let current = this.head;
        let previous;
        let count = 0;

        if(index > 0 && index > this.size){
            return;
        }
        if(index === 0){
            this.head = current.next;
        }
        else{            
            while(count < index){
                previous = current;
                count++;
                current = current.next;
            }
            previous.next = current.next;
        }
        this.size--;

    }

    // Clear list
    clearList(){
        this.head = null;
        this.size = 0;
    }
    //print list data
    printListData(){
        let current = this.head;
        while(current){
            console.log(current.data);
            current = current.next;
        }
    }

}

const ll = new LinkedList();

ll.insertFirst(100);
ll.insertFirst(200);
ll.insertFirst(300);
ll.insertLastNode(400);
ll.insertAt(350, 2)

// ll.getIndex(3);
ll.removeIndex(0);
ll.printListData();
