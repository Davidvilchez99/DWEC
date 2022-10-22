function crono(){
  document.open();
  fecha = new Date();
  document.write(fecha.getHours()+":");
  document.write(fecha.getMinutes()+":");
  document.write(fecha.getSeconds()+"<br>");
  if(fecha.getSeconds()<=60)
      setTimeout(crono, 1000);
}
setTimeout(crono, 1000);

function crono(){
  document.open();
  fecha = new Date();
  document.write(fecha.getHours()+":");
  document.write(fecha.getMinutes()+":");
  document.write(fecha.getSeconds()+"<br>");
  if(fecha.getSeconds()=== 0)
      clearInterval(crono, 1000);
}
clearInterval(crono, 1000);