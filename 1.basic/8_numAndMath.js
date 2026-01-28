// const num=400
// console.log(num)

// const newName= new Number(300)
// console.log(newName)

// console.log(newName.toString())//300
// console.log(newName)//immutable

// console.log(newName.toFixed(2))//300.00
// console.log(newName.toFixed(1))//300.0


// let balance=25.5689
// console.log(balance.toPrecision(2))//26
// console.log(balance.toPrecision(1))//3e+1 //(argument)=(1)->3 & other shows in exponential->e+1

// balance=11234.4545


// console.log(balance.toPrecision(3))//1.12e+4
// console.log(balance.toPrecision(2))//1.1e+4
// console.log(balance.toPrecision(5))//11234

// balance=100000
// console.log(balance.toLocaleString())//default us//100,000
// console.log(balance.toLocaleString("en-In"))//according to india//1,00,000


// //++++++++++++++++++++++++++ Math ++++++++++++++++++++++
// console.log(Math.abs(-4))//4
// console.log(Math.abs(4))//4
// console.log(Math.round(4.56))//5
// console.log(Math.ceil(4.1))//5 //mean 4 se .1 bhi jada ho toh 5 kar do
// console.log(Math.floor(4.9))//4 //5.55->5
// console.log(Math.sqrt(25))//5
// console.log(Math.min(25,7,-3,9))//-3
// console.log(Math.max(25,7,-3,9))//25
// console.log(Math.random())// gives random value between 0 to 1 excluding

// //for example i am making a dies game so , to display random number we use .random() function


// console.log(Math.floor(Math.random()*7))//it is capable to print random element for dies


//for example i want random number between 10 to 100 inclusive
console.log(Math.floor(Math.random()*(100-10+1)+10))
