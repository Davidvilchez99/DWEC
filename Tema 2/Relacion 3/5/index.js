function eliminarRepetidos(cadena){
    let cadenaUnida =cadena.split(" ");
    let resultado = [];
    for (let i = 0; i < cadenaUnida.length; i++){
        if (cadena.indexOf(cadenaUnida[i]) === cadena.lastIndexOf(cadenaUnida[i])){
            resultado.push(cadenaUnida[i]);
        }
    }
    return resultado.join('');
}
document.write(eliminarRepetidos("holaah"));