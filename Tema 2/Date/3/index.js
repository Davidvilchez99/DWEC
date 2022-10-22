let contador = 60;
function crono(){
        document.write(contador+"<br>");
        contador --;
        if(contador>=0)
            setTimeout(crono, 1000);
}
setTimeout(crono, 1000);
/*
function crono(){
    hora = new Date();
    document.write(hora.getSeconds()+"<br>");
    if(hora.getSeconds()<=60)
        clearInterval(intervalo);
}
var inervalo = setInterval(crono, 1000);
*/