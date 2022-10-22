// Write a function that can take in any number of arguments, and returns the sum of all of the arguments.


function onlyUniques(...arguments){
    let uniqueArray = [...new Set(arguments)];
    return uniqueArray;
}
document.write(onlyUniques(1, 4, 7, 1, 2, 7, 4));

