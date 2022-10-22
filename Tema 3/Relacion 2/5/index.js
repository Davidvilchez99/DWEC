function saddlePoint(array){

    solucion = [];
    for(let i=0; i<array.length; i++){
        for (let j=0; j<array[i];j++){
            if(mayorIgualATodos(array[i][j], i, array) )
                if (menorIgualATodos(array[i][j], j, array))
                //Encontrado saddle point
                solucion.push(i.toString()+j.toString());
        }
    }
    return solucion;
}

function mayorIgualATodos(valor,posFila, array){
    mayor = true;
    for (let i=0; i<array[posFila].length && mayor; i++){
        if(valor < array[posFila])
        mayor = false;
    }
    return mayor;
}

function menorIgualATodos(valor,posCol, array){
    menor = true;
    for (let i=0; i<array[posCol].length && menor; i++){
        if(valor > array[i][posCol])
        menor = false;
    }
    return menor;
}

arr = [
    [4, 5, 6, 7],
    [4, 5, 16, 7],
    [4, 5, 9, 7],
    [4, 5, 16, 7]
];

document.write(saddlePoint(arr));