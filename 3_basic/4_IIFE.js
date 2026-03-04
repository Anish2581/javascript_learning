//Immediately Invoke Function Expression (IIFE)
//there is two reason of using IIFE

//1.immediately invoke without call

//2.to privent global variable conflict 

// there is two type of IIFE

//1.Named IIFE
(function add(){
    console.log("DB Connected")
})();//semicolon is necessary because if we connot give semicolon it will keep running means it connot exit the function and if it can't exit it will not read any other IIFE function
//output :- DB Connected without call add function
//syntax:-()->for declaration,()->for call

(function print(user){
    console.log(`DB Connected ,${user}`)
})("Anish");


//2.normal IIFE:-using arrow function

(() =>{
    console.log("DB Connected")
})();

((user) =>{
    console.log(`DB Connected,${user}`)
})("Anish");


// FOR AVOID GLOBAL CONFLICT

// (function () {
//     var message = "Hello";
//     console.log(message);
// })();

// console.log(message); // ❌ Error (not accessible)

//RULE OF DECLARING VARIABLE IN JS

//1.Must start with letter,_ (underscore)and $(doller sign) ex:-$="anish"
//2.do not contain space
//3.do not match reserved keyword like for,while and etc