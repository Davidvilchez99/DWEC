// tema 1
var miVariable = 4;
var fecha = new Date();
console.log("El valor de mi variable es "+miVariable);
document.write(fecha);
// pedir algo
numero = parseInt(prompt("Introduce un numero"));
console.log(numero);
palabra = prompt("introduce una palabra");
console.log(palabra);
// if y condicionales
if(numero>10 && palabra.length==5){
    console.log("es mayor que 10");
}else{
    console.log("el numero es menor que 10");
}
// for while
for (i=0; i<=10; i++){
    document.write("<p>"+i+"</p>");
}
numero2 = prompt("introduce un numero");
while(numero2==2){
    console.log("hola");
}

function suma (...numeros)
{
    let counter = 0;
    for (let value of numeros)
    {
        counter += value;
    }
    document.write(counter);
}

suma(1,2,3,4);

function getRandom(){
    return Math.random() + "<br>";
}
document.write(getRandom());

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min + "<br>";
}
document.write(getRandomArbitrary(0,3));

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
document.write(getRandomInt(3));


array = [1,2,3,4,5,6,7,8,9,10,11,12,13,15,16,17,18,19,20];
function recorrerArray(array){
    for (numero of array){
        if(numero<10){
            document.write(numero);
        }
    }
}
document.write(recorrerArray(array));

function recorrerArray2(array){
    for(i=0; i<array.length; i++){
        if(array[i]<10){
            document.write(array[i]);
        }
    }
}

document.write(recorrerArray2(array));
