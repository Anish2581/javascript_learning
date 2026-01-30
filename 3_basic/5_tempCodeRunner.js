let a=20
const b=20
var c=30
if(true){
let a=10//error
const b=20 //error //30
c=20 //30  /when we declare any variable without using keywords then by default it will considered it as "var" keyword
}
console.log(a,b,c)