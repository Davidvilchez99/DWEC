function tiradas(){
    let resultado1 = 0;
    let resultado2 = 0;
    let resultado3 = 0;
    let resultado4 = 0;
    let resultado5 = 0;
    let resultado6 = 0;

    for (i=0; i<=6000; i++){
        if (lanzamiento() == 1){
            resultado1 ++;
        }
        else if (lanzamiento() == 2){
            resultado2 ++;
        }
        else if (lanzamiento() == 3){
            resultado3 ++;
        }
        else if (lanzamiento() == 4){
            resultado4 ++;
        }
        else if (lanzamiento() == 5){
            resultado5 ++;
        }
        else{
            resultado6 ++;
        }
    }
    document.write( "Nº ocurrencias (1): "+resultado1+"<br>");
    document.write( "Nº ocurrencias (2): "+resultado2+"<br>");
    document.write( "Nº ocurrencias (3): "+resultado3+"<br>");
    document.write( "Nº ocurrencias (4): "+resultado4+"<br>");
    document.write( "Nº ocurrencias (5): "+resultado5+"<br>");
    document.write( "Nº ocurrencias (6): "+resultado6+"<br>");
}



function lanzamiento(min =1, max =7){
    return Math.floor(Math.random() * (max-min)+min);
}


document.write(tiradas());