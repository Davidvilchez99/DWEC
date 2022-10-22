// Write a function that can take in any number of arguments, and returns the sum of all of the arguments.


function sumEveryOther(...arguments){
    let acumulator = 0;
    for (let position = 0; position <= arguments.length; position += 2 ){
        acumulator +=arguments[position];
    }
    return acumulator;
}
document.write(sumEveryOther(5, 6, 3, 4, 1)+ "<br>");
document.write(sumEveryOther(10, 2, 11)+ "<br>");

