// javascript has same loops as c and c++
//important loops in js:-for,while,do while,forof,forin
// let arr=[1,2,3,4,5]
// for (const i of arr) {
//     console.log(i)//forof keyword will copy all element of "arr" in variable "i" and print "i"
// }

// const greeting="hello world"
// for (const i of greeting) {
//     console.log(i)
// }

//MAPS :-   
let map= new Map()
map.set("IN","india")
map.set("USA","United State of America")
map.set("FR","French")
map.set("IN","Indonesia")//map is mutable we can change value example this 
// console.log(typeof map)//object
// console.log(map)
////Map(3) {
//  'IN' => 'india',
//  'USA' => 'United State of America',
//  'FR' => 'French'
// }


// for(const [key,value] of map){
//     console.log(`full form of ${key} is ${value}`)
// }
// full form of IN is india
// full form of USA is United State of America
// full form of FR is French

// let my={
//     name:"anish",
//     rollno:213
// }
// console.log(my)
// my["rollno"]=162
// console.log(my)
// for (const [k,j] of my) {
//     console.log(`${i}->${j}`)
// }//error:-"object is not iterable"

// const myobj={
//     name:"Anish",
//     "full name":"Anish Gupta",
//     age:18,
//    // [sym]:"69",
//     location:"bandra",
//     email:"asd@gmail.com",
//     lastlogged:["saturday","sunday"],
//     isloggedIn:false
// }

//for print this we use forin loop

// for (let key in myobj){
//     console.log(`${key}:${myobj[key]}`)
// }
//name:Anish
// full name:Anish Gupta
// age:18
// location:bandra
// email:asd@gmail.com
// lastlogged:saturday,sunday
// isloggedIn:false

// const brr=["js","python","c","cpp"]
// for(let i in brr){//"forin" loop is copy the index of an array  in given variable
//     console.log(brr[i])
// }

// for(let i in map){
//     console.log(i)
// }//map is not printed by using forin loop

