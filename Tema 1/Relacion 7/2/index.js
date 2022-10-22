// Write a function called addOnlyNums that can take in any number of arguments (including numbers or strings), 
// and returns the sum of only the numbers.



function addOnlyNums(...nums){
    let counter = 0;
    for (let value of nums){
        if (!isNaN(value)){
            counter+=value;
        }
    }
    return counter;
}
document.write(addOnlyNums(1, 'cat', 3, 4));
