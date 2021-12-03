# ArrayFlattening
This repository holds the solution to flatten an array without using any pre defined flat function.

## Problem Statment :
Write an algorithm to flatten an arbitrarily nested array of values. 

```
[ 1, [ 2, [ 3 ] ], 4 ] -> [ 1, 2, 3, 4 ]
```


## Approach :

As described in the question I am not supposed to use any inbuilt flattening function so I will try to create a recursive function that will call it self each time it found a nested array.

## Testing :
I have tried to added every possible test case.
I am using deepStrictEqual rather than using equal as deepStrictEqual equates the type and value (===) of the result along with children type and value (===) which is not performed in case of equals(==);
