// let name = "Anish"
// let age = 18
// //trim method
// console.log(`Hey! i am ${name} and i am ${age} year old`)
// name="     Anish       "
// console.log(name)
// console.log(name.trim())
// console.log(name)//string is immutable
// console.log(name.trimStart())
// console.log(name.trimEnd())

// //length
// console.log("Anish".length)//5

// //toUpperCase and toLowerCase
// console.log("Anish".toUpperCase())//ANISH
// console.log("aNISH".toLowerCase())//anish

// //indexof()


// console.log("Aryan".indexOf("a"))//3//it is case sensitive
// console.log("Aryan".indexOf("A"))//0;if its not found return "-1"
// console.log("banana".lastIndexOf("a"))//5;if its not found return "-1"

// //.include(),.startsWith(),.endsWith()

// console.log("javascript".includes("Script"))//true //otherwise false and it is case sensitive
// console.log("hello world".startsWith("hello"))//true //otherwise false and it is case sensitive
// console.log("hello world".endsWith("world"))//true //otherwise false and it is case sensitive

// .slice(start, end)


console.log("Abhishek".slice(0,4))//there is no increment operation like python ex:-".slice(0,4,2)"
console.log("Abhishek".slice(0))//whenever we only mention one number it will start from that index and end to the last index
console.log("Abhishek".slice(5))
console.log("Abhishek".slice(-5))//-5 to -1

//.substring(start, end)

console.log("Abhishek".substring(0,4))
console.log("Abhishek".substring(0))
console.log("Abhishek".substring(5))
console.log("Abhishek".substring(-2))//when we pass negative argument then it will print whole string


//substr(start, length)
console.log("anishgupta".substr(5,6))//gupta //(start,length)

//replace(old, new),replaceAll()
console.log("hello world".replace("world","javascript"))//hello javascript
console.log("anish Gupta".replace("anish","Akash"))//Akash Gupta 

console.log("aa bb cc aa".replace("aa","ee"))//ee bb cc aa  ; change only fristone
console.log("aa bb cc aa".replaceAll("aa","ee"))//ee bb cc ee  ; change all similar string

//.split()

let a="Anish,Akash,Aryan,Harsh"
let b=a.split(",")//[ 'Anish', 'Akash', 'Aryan', 'Harsh' ]
console.log(b)//convert string -> array depend on argrment passed

//charAt()->pass any  index of string and this method will show character present at that index

console.log("Ajay".charAt("3"))//char->y

//charCodeAt() & fromCharCode

console.log("abc".charCodeAt(0))//97   //here we pass index of an specific character and 
// char->ascii value                     this method will show ascii value of that character



console.log(String.fromCharCode(65))//A //ascii->character
