
Alto = parseInt(prompt("Introduce el alto del tablero"));



document.write("<table border = ”0” cellspacing = ”2” bgcolor = ”black” width = ”200” >");

for (let i=0; i<8; i++)
{
    document.write("<tr bgcolor='white' height='"+ Alto +"'>");
    for (let j=0; j<8; j++){
        document.write("<td width='"+ Alto +"' bgcolor='")
        if (i % 2 != 0 &&  j % 2 == 0)
            document.write("white'")
        else if (i % 2 != 0 ||  j % 2 == 0)
            document.write("black'")
        else
            document.write("white'")
        document.write("> &nbsp;</td>")
            
    }   
    document.write("</tr>");
}

document.write("</table>");
