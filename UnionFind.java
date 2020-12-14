/**
 * UnionFind/Disjoint Set data structure implementation
 * This code is inspired by the union find method found in Algorithms Fourth Edition
 * 
 * 
 */

 public class UnionFind{
    // The number of elements in this union find
    private int size;

    // Used to track the sizes of each
    private int[] sz; 

    // id[i] points to the parent node of i, if id[i] = i then i is a root node.
    private int[] id;

    private int numComponents;

    public UnionFind(int size){

        this.size = numComponents = size;
        sz = new int[size];
        id = new int [size];

        for(int i = 0; i < size; i++){
            id[i] = i; //link to itself 
            sz[i] = 1; //each component is originally of size one
        }

    }
    // Find which component/set 'p' belongs to, takes amortized constant time.
    public int find(int p){
        //Find the root of the component/set
        int root = p;
        while(root != id[root]{
            root = id[root];
        }
            
        //Compress the path leading back to the root. 
        //This operation is called path compression.
        //This is what will give us the amortized constant time.
        while(p != root) {
            int next = id[p];
            id[p] = root;
            p = next;
        }
        return root;
    }
    //Determine if the elements 'p' and 'q' are in the same components/set.
    public boolean connected (int p, int q){
        return find(p) == find(q);
    }
    
    //Return the size of the components/set 'p' belongs to 
    public int componentSize(int p){
        return sz[find(p)]
    }

    //Return the number of elements in this Union Find set
    public int size() {
        return size;
    }

    //Returns the number of remaining components/sets
    public int components() {
        return numComponents;
    }
    //Unify the components/sets containing elements 'p' and 'q'

    public void unify(int p, int q){
        int root1 = find(p);
        int root2 = find(q);

        //These elements are already in the same group!
        if(root1 == root2) return;

        //Merge the component sets together
        //Merge smaller component/set into the larger one.
        if(sz[root1] < sz[root2]){
            sz[root2] += sz[root2];
            id[root1] = root2;
        }else{
            sz[root1] += sz[root2];
            id[root2] = root1;
        }
        //Since the roots found are different we know that the number of compent sets has decreased by one
        numComponents--;

    }

 }