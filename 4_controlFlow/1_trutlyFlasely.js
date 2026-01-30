//1.let username="anish@gmail.com"  //
// 2.let username=""
// //3.let username=[]
// if (username){
//     console.log("got an username")
// }
// else{
//     console.log("not found username")
// }//1.output:-"got an username"
//2.output:-"not found username"
//3.output:-"got an username"


//falsy values:-
//false,0,"",bigInt 0n,-0,null,undefined,NaN

//truthly values:-
//"0","false"," ",[],{},function(){}

//nallish colesing operator (??)
let val=4??5//4
val=null??10//10
val=20??null??40//20
val=null??undefined??30??20//30
val=null??undefined??{}??[]
console.log(val)


//ternary operator (?):-
//syntax:-condition?  true:false

let val1=49
val1%2==0 ?console.log("even"):console.log("odd")//odd
