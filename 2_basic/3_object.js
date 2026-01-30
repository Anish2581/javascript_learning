//singleton
//object.create


//object literal
const sym=Symbol("23")
const myobj={
    name:"Anish",
    "full name":"Anish Gupta",
    age:18,
    [sym]:"69",
    location:"bandra",
    email:"asd@gmail.com",
    lastlogged:["saturday","sunday"],
    isloggedIn:false
}

// console.log(myobj.name)//Anish
// console.log(myobj["name"])//Anish

// // console.log(myobj."full name")//error:- Unexpected string
// console.log(myobj["full name"])// Anish Gupta

console.log(myobj.sym)//undefined           //this will happen wan we take "sym" not "[sym]"
console.log(myobj[sym])//69
console.log(myobj.lname)//when we try to print value of element of object which is not present it print "undefined"
// // console.log(typeof myobj.sym)//string //
// //but we have to do symbol in object

// console.log(myobj[sym])//69
// console.log(typeof myobj[sym])//the key is a symbol and value is string 
// //so whenever we try to print typeof "myobj[sym]" it will print type of value not key


// myobj.email="anishg@gmail.com"
// console.log(myobj.email)//obj are "mutable" means we can change after initialization

// Object.freeze(myobj)//it will freeze or lock the object

// myobj.email="jslearning.com"
// console.log(myobj.email)//due to freeze an object myobj.email not change
// console.log(myobj)

myobj.newname="guptaji"//we can directly add any new variable in an object like this
console.log(myobj)


myobj.greeting= function(){
    console.log("hello js user")
}
console.log(myobj.greeting)//[Function (anonymous)]
console.log(myobj.greeting())//hello js user
//"undefined" also print in console {we will discuss in upcoming topic}

myobj.greeting2= function(){
    console.log(`hello js user, ${this.name}`)//we can excess inside the object element it own elements using "this" keyword
}
console.log(myobj.greeting2())//hello js user, Anish