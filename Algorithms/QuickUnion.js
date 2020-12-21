//Quick UNion is slow to find the operation it would end up being linear find.

function QuickUnionUF(n){
    //track components
    this.id = [];

        //initialize the array
    for(var i = 0; i < n; i++){
        this.id[i] = i;
    }

    //chase parent pointers until reach root (depth of i array accesses)
    function root(i){
        while(i !== id[i]){
            i = id[i];
            return i;
        }

    }

    // check if roots p and q have the same root
    function connected(p , q){
        return root(p) === root(q);
    }

    // Change root of p to point to root of q 
    function union(p, q){
        var i = root(p);
        var j = root(q);
        id[i] = j;
    }

}

