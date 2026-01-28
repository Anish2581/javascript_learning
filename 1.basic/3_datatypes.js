let a=1
let b="2j"
let c=true
let d=null
let e      
let f=1.11

                 //*data type*
console.log(typeof a)//number
console.log(typeof b)//string
console.log(typeof c)//boolean
console.log(typeof d)//object
console.log(typeof e)//undefined
console.log(typeof f)//number
                     //"bigint" for long numbers
console.log(e)//undefined
//two types of datatype is there 
//PRIMITIVES DATATYPE(call by value)
//7 types: string,number,boolean,null,undefined,symbol,bigInt


//NON-PRIMITIVES DATATYPE(call by Refrences)
//Arrays,object,function

//symbol
const id=Symbol('123')
const aid=Symbol('123')
console.log(id==aid)//false
console.log(id ,aid)

//bigInt
let bigInt=636356383564783873734847n//when we attach "n" after any number it will considered it as bigInt
let nbigInt=7575n//type of this variable is "bigInt" 


//arrays
const students=["anish","harsh","akash","aryan"]
console.log(students)

//object

let myobj={
    name:"anish",
    rollno:"213"
}
console.log(typeof(myobj))
console.log(myobj)


//function
const myfunc=function(){
    console.log("hello world")
}
console.log(myfunc)
console.log(typeof myfunc)


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//stack(primitive),heap(non-primitive)
let one="anish"
let two=one
two="aryan"
console.log(one)//by changing variable "two" variable "one" is not change "meaning it is pass by value"
console.log(two)//"Deep Copy"


let obj={
    name:"anish",
    email:"anish.com"
}
let obj1=obj
obj1.email="gmail.com"
console.log(obj)//by changing "obj1" "obj" is also changed cuz it is "pass by reference"
console.log(obj1)//"shallow copy"