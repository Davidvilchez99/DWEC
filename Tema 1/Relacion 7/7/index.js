// Write a function that can take in any number of arguments, and returns the sum of all of the arguments.


function combineAllArrays(...arrays){
    combineArrays = []
    for (array of arrays){
        combineArrays = [...combineArrays, ...array]
    }
    return combineArrays;
}
Array1 = [2, 4, 3];
Array2 = [5, 2, 7];
document.write(combineAllArrays(Array1, Array2));

