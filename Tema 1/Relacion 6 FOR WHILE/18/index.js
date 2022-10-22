
NumeroColumnas = parseInt(prompt("Introduce un número de columnas"));
NumeroFilas = parseInt(prompt("Introduce un número de filas"));
Alto = parseInt(prompt("Introduce el alto"));
Ancho = parseInt(prompt("Introduce el ancho"));



document.write("<table border = ”0” cellspacing = ”2” bgcolor = ”black” width = ”200” >");

for (let i=0; i<NumeroColumnas; i++)
{
    document.write("<tr bgcolor='white' height='"+ Alto +"'>");
    for (let j=0; j<NumeroFilas; j++){
        document.write("<td width = '"+ Ancho + "'bgcolor='white'>&nbsp;</td>");
    }   
    document.write("</tr>");
}

document.write("</table>");
