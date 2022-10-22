a = parseInt(prompt("Introduzca el primer valor (a)"));
b = parseInt(prompt("Introduzca el segundo valor (b)"));
c = parseInt(prompt("Introduzca el tercer valor (c)"));

function positive(a,b,c){
    return (((-1*(b) +(Math.sqrt(Math.pow(b,2)) - (4*a*c))))/2*a)+ "<br>";
}

function negative(a,b,c){
    return (((-1*(b) -(Math.sqrt(Math.pow(b,2)) - (4*a*c))))/2*a)+ "<br>";
}

document.write("x1= "+positive(a,b,c));
document.write("x2= "+negative(a,b,c));2
