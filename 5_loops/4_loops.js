const arr=[1,2,3,4,5,6,7,8,9,10]
const store=arr.map( (arr) => arr+10 )
console.log(store)//output:-[11, 12, 13, 14, 15,16, 17, 18, 19, 20]

//map function also use callback function but it return an value like 
// (1+10=11 so it return 11 and push this integer into given variable)
// while filter function only return a boolean value like(T or F)and according to this it will return the argument 
//EX:- (arr) => n>3;  if true return "arr" else continue loop

const newstore=arr.filter( (arr) => arr+10 )
console.log(newstore)//output:-[1, 2, 3, 4,  5,6, 7, 8, 9, 10]

