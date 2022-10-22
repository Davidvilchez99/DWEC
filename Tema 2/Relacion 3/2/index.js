function checkType(cadena) {
    const array = {
      "lower": /^[a-z0-9 ]+$/,
      "upper": /^[A-Z0-9 ]+$/,
      "upperLower": /^[A-Za-z0-9 ]+$/
    }
   
    if (array.lower.test(cadena)) return 'Solo minusculas';
    if (array.upper.test(cadena)) return 'Solo mayusculas';
    if (array.upperLower.test(cadena)) return 'Tiene mayusculas  y minusculas';
  }

document.write(checkType("ASdAS"));