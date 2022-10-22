// 1
const sum = (num1, num2) =>{num1+num2}
// 2
const stringLength = (str) => {console.log(`the length of "${str}" is:`, str.length)}
// 3
const stringLength2 = (str) => {
    let length = str.length;
    console.log(`the length of "${str}" is:`, length);
    return str.length;
}
// 4
const showAlert = (name) => {alert(alerts[(Math.floor(Math.random()*alerts.length))] + `, ${name}!`)}
// 5
const oneTwoThreeRotate = () =>{
    Array.prototype.slice.call(document.querySelectorAll('div,p,span,img,a,body')).map(function(tag){
    tag.style['transform'] = 'rotate(' + (Math.floor(Math.random() * 3) - 1) + 'deg)';})
}
// 6
const name = (name, age) => {console.log("Hello, I am "+name+", and I am "+age+" years old.")}
name("David", 30);
// 7
array =[1,2,3,4,5,6,7,8,9,10];
const arrowSum = (array) => {}