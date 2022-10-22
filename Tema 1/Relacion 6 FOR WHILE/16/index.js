Numero = parseInt(prompt("Introduce un número"));


do{
    numeroAdivinar = parseInt(prompt("Adivina el número introducido"));
    if (Numero < numeroAdivinar)
        alert("El numero introducido es mayor");
    if (Numero > numeroAdivinar)
        alert("El numero introducido es menor");
        
}while (numeroAdivinar != Numero)
{
    alert("Lo has adivinado");
}
