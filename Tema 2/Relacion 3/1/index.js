function invertirCadena(cadena){
    var separarCadena = cadena.split(" ");
    var invertir =  separarCadena.reverse();
    var unir = invertir.join("");
    return unir +"<br>";
}
document.write(invertirCadena("Hola buenas"));

function invertirPalabra(cadena){
    var separarCadena = cadena.split(" ");
    var invertirPalabra = separarCadena.split("");
    var invertir = invertirPalabra.reverse();
    var unir = invertir.join("");
    return unir +"<br>";
}
document.write(invertirPalabra("Hola buenas"));

function encuentraPalabraMasLarga(cadena){
    var separarCadena = cadena.split(" ");
    var palabraLarga = separarCadena[0];
    for(palabra of separarCadena)
        if (palabra.length >= palabraLarga.length){
            palabraLarga = palabra;
        }
    return palabraLarga+"<br>";
}
document.write(encuentraPalabraMasLarga("Hola buenas"));

function filtraPalabraMasLarga(cadena, i){
    var separarCadena = cadena.split(" ");
    var contador =0;
    for(palabra of separarCadena)
        if (palabra.length > i ){
            contador += 1;
        }
    return contador+"<br>";
}
document.write(filtraPalabraMasLarga("Hola buenas tardes", 4));

function cadenaBienFormada(cadena){
    return cadena.charAt(0).toUpperCase()+ cadena.slice(1).toLowerCase();
}
document.write(cadenaBienFormada("hola BuenAs tArdes"));
