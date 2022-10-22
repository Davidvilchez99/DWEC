function contarPalabras(cadena){
    var cadenaUnida =cadena.split(" ").join("");
    return cadenaUnida.length;
}
document.write(contarPalabras("    hola buenos dias    "));

