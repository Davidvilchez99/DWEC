function VocalesConsonantes(cadena){
  let vocales = cadena.match(/[aeiou]/ig).join("");
  let consonantes = cadena.match(/[^aeiou]/ig).join("");
  resultado = consonantes + vocales;
  return resultado;
}

document.write(VocalesConsonantes("Buenas tardes"));