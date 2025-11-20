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

