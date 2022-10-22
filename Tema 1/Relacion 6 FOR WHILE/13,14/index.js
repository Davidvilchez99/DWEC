
NumeroColumnas = parseInt(prompt("Introduce un número de columnas"));

Alto = parseInt(prompt("Introduce el alto"));

Ancho = parseInt(prompt("Introduce el ancho"));


document.write("<table border='0' cellspacing='2' bgcolor='black' width='200'>");
document.write("<tr height = '"+ Alto + "'>");


i=0;
while(i<NumeroColumnas)
{
    if(i % 2 == 0)
    {
        document.write("<td bgcolor='black' width = '"+ Ancho + "'>&nbsp;</td>"); 
        i++;
    }
    else
    {
        document.write("<td bgcolor='white' width = '"+ Ancho + "'>&nbsp;</td>"); 
        i++;
    }
}

document.write("</tr>");
document.write("</table>");