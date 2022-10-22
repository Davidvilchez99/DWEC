function esPalindroma(cadena){
    var separarCadena = cadena.split("");
    var invertir = separarCadena.reverse();
    var unir = invertir.join("");
    if (unir == cadena)
        document.write("Es palíndroma"+ "<br>");
    else
        document.write("No es palíndroma"+ "<br>");
}
document.write(esPalindroma("sad"));