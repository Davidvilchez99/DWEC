function getRandom(){
    return Math.random() + "<br>";
}
document.write(getRandom());



function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min + "<br>";
}

document.write(getRandomArbitrary(100,200));

valor1 = parseInt(prompt("Introduzca el primer valor"));
valor2 = parseInt(prompt("Introduzca el segundo valor"));
document.write(getRandomArbitrary(valor1,valor2));