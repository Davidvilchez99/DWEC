let miVariable="jose";
// let(local) o var(global) para definir variables

console.log("El valor de mi variable es= " + miVariable);


miVariable=true;

console.log(`El valor de mi variable es= ${miVariable}`);

/*
console.log("Esto es un paginon!");
document.write("<h1>Contenido de mi primera web</h1>");
*/


let a = 15;
let b = 5;

let suma = a+b;
let mult = a*b;
let div = a/b;

console.log(suma);
console.log(mult);
console.log(div);

let booleano = false;

// if ( a===3 && b===5)
// {
//     console.log("La variable booleano es true");
//     console.log("Fin del if")
// }
// else
// {
//     console.log("booleano es falso")
// }

// if ( a==2 || a==3) a=2 o a=3

switch (a){
case 3:

    console.log("a vale 3");
    console.log("Fin del if");
    break;
case 5:
    console.log("a vale 5");
    break;
default:
    console.log("entra en el default");
}


// edad = parseInt(prompt("Introduce tu edad"));
// console.log(edad);


/*
for (let i=10; i<=0; i--)
{
    document.write(i+"<br>");
}
*/
/*
let nombres=["pepe", "juan", "armando"];


for (let i=0; i<nombres.length; i++)
{
    document.write(nombres[i]+"<br>");
}

for (let nombre of nombres)
    document.write(nombre+"<br>")
*/

let contador = 0;
while (contador <=10)
{
    document.write(contador + "<br>");
    contador++;
}
/*
let encontrado = false;
while (!encontrado)
{
    // Busco
    //Si lo encuentro --> encontrado = true;
}

do {

}
while (!encontrado)

*/


function suma (a,b,c)
{
    let resultado = a+b+c;

    document.write(resultado);
}

let numeros = [1,3,5];
suma(numeros[0], numeros[1], numeros[2]);// hacen los mismo

suma(...numeros);// hacen los mismo