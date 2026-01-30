let a=20
// const b=20
// var c=30
if(true){
let a=10
const b=20
// var c=30 //30
c=30 //30  /when we declare any variable without using keywords then by default it will considered it as "var" keyword
}

console.log(a)
// console.log(b)
console.log(c)

if (true)
    {
    let name="s"
    if (name==="s"){
        let username="gupta"
        console.log(username + name)
    }
    // console.log(username)//it will throw an error because username is in another scope 

    }


    // +++++++++++++++++++++++++++++++ interesting ++++++++++++++++++++++++++++++++++++

    //1.format:-
    // console.log(addone(6))//we cannot use it before initialization
    let addone=function(num){
        return num+1
    }

    //2.format:-
    console.log(addtwo(7))//we can use this before initialization //reason:-
    function addtwo(num){
        return num+2
    }