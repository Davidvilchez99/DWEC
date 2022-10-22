function filtraPalabraMasLarga(cadena, subcadena){
  var separarCadena = cadena.split(" ");
  var contador =0;
  for(palabra of separarCadena)
      if (palabra == subcadena ){
          contador += 1;
      }
  return contador+"<br>";
}
document.write(filtraPalabraMasLarga("Hola buenas buenas tardes", "buenas"));
