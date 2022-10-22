matriz = [[34,21,32,41,25],
          [14,42,43,14,31],
          [54,45,52,42,23],
          [33,15,51,31,35],
          [21,52,33,13,23]];



function hunts(matriz){
    encontrado = false;
    posX=0;
    posY=0;
    while (!encontrado){
        valorInicial = matriz[posX][posY].toString();
        if (valorInicial == matriz[valorInicial[0]-1][valorInicial[1]]-1){
            encontrado=true;
        }
        else{
            valorInicial = matriz[valorInicial[0]-1][valorInicial[1]-1].toString();
            posX = valorInicial[0];
            posy = valorInicial[1];
            return valorInicial;
        }        
    }
    
}

document.write(hunts(matriz));