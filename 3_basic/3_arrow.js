let user={
        username:"Anish",
        welcomemessage:function(){
        //     console.log(`${username} ,welcome to website`)//error:-username not define
        //     console.log(`${user.username} ,welcome to website`)//valid
            console.log(`${this.username} ,welcome to website`)//valid  //this keyword is use to excess its own variables
            console.log(this)
        }
}

user.welcomemessage()
user.username="Akash"
user.welcomemessage()
console.log(this)//{}

// // function chai(){
// //     user="na"
// //     // console.log(this)//it is showing many bunch of line //this keyword is "object" which contain so many variables
// //     console.log(this.user)//output:-undefined  //this keyword is only work in objects
// // }
// // chai()

// // let chai=function(){//it will show same output 
// //         user="na"
// //     // console.log(this)//it is showing many bunch of line //this keyword is "object" which contain so many variables
// //     console.log(this.user)//output:-undefined  //this keyword is only work in objects
// // }
// // chai()

// //++++++++++++++++++++++ Arrow function ++++++++++++++++++:-basic syntax "()  => {}""
// // we will beclare arrow function in this format

// let chai= () => {//it will show same output 
//         user="na"
//     // console.log(this)//it is showing many bunch of line //this keyword is "object" which contain so many variables
//     console.log(this.user)//output:-undefined  //this keyword is only work in objects
// }
// chai()

// 1.explesite return:-
// const add=(num1,num2) => {
//     return num1+num2
// }
// console.log(add(5,10))//15  //in this we connot excess it before initialization

// //2.implesite return:-
// // const add = (num1,num2) =>  num1+num2
// const add=(num1,num2) => (num1+num2)
// console.log(add(50,20))//70

// const returnObject=() => ({num1:500})
// console.log(returnObject())//{ num1: 500 }
