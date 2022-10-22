let compra =['Peras', 'Manzanas', 'Kiwis', 'Plátanos', 'Mandarinas'];
let borrado = compra.splice(1,1);
//document.write(borrado);
//document.write(compra);

let anadir = compra.splice(3,0,'Naranjas', 'Sandía');


let quitar = compra.splice(1,1,'Cerezas', 'Nísperos');
console.log(compra);