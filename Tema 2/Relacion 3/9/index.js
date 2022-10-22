function cuadradoPalabra(palabra) {
    palabra = palabra.replace(/ /g, "");
    let split = palabra.split("");
    let reverse = palabra.split("").reverse();
    document.write("<table>");
    document.write("<tr>");
    document.write(`<td>${palabra.charAt(0)}</td>`);
    
    for (i = 1; i < split.length; i++) {
      document.write(`<td>${split[i]}</td>`);
    }
    document.write("</tr>");
  
    for (i = 1; i < split.length; i++) {
      document.write(`<tr><td>${split[i]}</td>`);
    }
  
    for (i = 1; i < reverse.length; i++) {
      document.write(`<td>${reverse[i]}</td>`);
    }
    document.write("</tr>");
  }
  
  cuadradoPalabra("HOLA");