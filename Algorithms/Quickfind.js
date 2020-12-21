function QuickFind(n){
    // track components
    this.id = []

    //initialize ids
    for(var i = o; i < n ; i++)
    {
        this.id[i] = i;
    }

    //find if 2 components are connected
    this.connected = function(p, q){
        return this.id[p] === this.id[q];

    }

    //connect two components
    this.union = function(p, q){
        var qid = this.id[q];
        var pid = this.id[p];

        for(var i = 0 ; i < this.id.length; i++){
            if(this.id[i] === pid) this.id[i] = qid;
            
        }
    }

}

//test case
var x = new QuickFind(3);
x.union(0, 1);
x.union(0, 2);
console.log(x.id);
console.log(x.connected(0, 1));
