function subCadena(cadena1, cadena2){
    if (cadena1.includes(cadena2)){
        document.write('Es una subcadena'+'<br>');
    }
    else{
        document.write('No es una subcadena'+'<br>');
    }
}
subCadena("hola buenas tardes"," wew");
subCadena("hola buenas tardes","tardes");