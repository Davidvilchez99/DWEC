// Write a function that can take in any number of arguments, and returns the sum of all of the arguments.


function combineTwoArrays (array1, array2)
{
    const combined = [...array1, ...array2];
    return combined;
}
let uno = [1,2,3];
let dos = [4,3,1];

document.write(combineTwoArrays(uno,dos));


