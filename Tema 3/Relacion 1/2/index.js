function lanzamiento(min =1, max =7){
    return Math.floor(Math.random() * (max-min)+min);
}

document.write(lanzamiento());