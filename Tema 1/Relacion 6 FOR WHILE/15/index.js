numero = parseInt(prompt("Introduce un número"));

numeroAdivinar = parseInt(prompt("Adivina el número introducido"));


while (numeroAdivinar != numero)
{
    numeroAdivinar = parseInt(prompt("Adivina el número introducido"));
    if (numero < numeroAdivinar)
        alert("El numero introducido es mayor");
    if (numero > numeroAdivinar)
        alert("El numero introducido es menor");
}
alert("Lo has adivinado")

