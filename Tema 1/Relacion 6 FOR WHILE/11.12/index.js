
NumeroColumnas = parseInt(prompt("Introduce un número de columnas"));

Alto = parseInt(prompt("Introduce el alto"));

Ancho = parseInt(prompt("Introduce el ancho"));


document.write("<table border='0' cellspacing='2' bgcolor='black' width='200'>");
document.write("<tr height ='"+ Alto + "'>");

for(let i=0; i<NumeroColumnas; i++)
{
    if(i % 2 == 0)
        {
            document.write("<td width ='"+ Ancho + "' bgcolor='black' > &nbsp;</td>");
        }
    else 
        {
            document.write("<td width ='"+ Ancho + "' bgcolor='white' > &nbsp;</td>");
        }
}

document.write("</tr>");
document.write("</table>");