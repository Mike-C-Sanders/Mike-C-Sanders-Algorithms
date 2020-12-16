/**
 * Problem and solutions inspired and taken from the Algorithms Fourth Edition by Sedgewick and Wayne
 * 3-Sum: Problem
 * ThreeSum's goal is to count the number of unordered triples in a file of n integers that sum to 0 (assuming overflow plays no role).
 * 
 * 
 *  */ 

 //Brute force method (not ideal....)
 public class ThreeSum{
    public static int count(int[] a)
    {
        int N =a.length;
        int count =0;
        for (int i =0; i<N; i++)
            for(int j =i+1; j<N; j++)
                for(int k = j+1; k<N; k++) //check each triple.
                    if(a[i] + a[j]+ a[k] == 0) //for simplicity ignore integer overflow
                        count++;
        
        return count;

    }

    public static void main(String[] args)
    {
        int[] a = In.readInts(args[0];
        StdOut.println(count(a)));
    }
 }
