document.write("<table border='1'>");
document.write("<tr>");
        document.write("<td>Número</td>");
        document.write("<td>Seno (Radianes)</td>");
    document.write("</tr>");

        for (i=0; i<=100;i++)
        {
            document.write("<tr>");
            document.write("<td>"+i+"</td>");
            document.write("<td>"+Math.sin(i)+"</td>")
            document.write("</tr>");
        }

document.write("</table>");
