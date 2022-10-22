function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  
variable = getRandomInt(3);
if (variable==2){
    document.write("<img src='https://pics.filmaffinity.com/Cars-746710621-large.jpg'/>");
}
else if (variable==1){
    document.write("<img src='https://pics.filmaffinity.com/Shrek-903764423-large.jpg'/>");
}
else{
    document.write("<img src='https://lumiere-a.akamaihd.net/v1/images/image_07f1aaf3.jpeg?region=0,0,540,810'/>");
}