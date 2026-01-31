const arr=[1,2,3,4,5,6,7,8,9,10]
const store=arr.map( (arr) => arr+10 )
console.log(store)//output:-[11, 12, 13, 14, 15,16, 17, 18, 19, 20]

//map function also use callback function but it return an value like 
// (1+10=11 so it return 11 and push this integer into given variable)
// while filter function only return a boolean value like(T or F)and according to this it will return the argument 
//EX:- (arr) => n>3;  if true return "arr" else continue loop

const newstore=arr.filter( (arr) => arr+10 )
console.log(newstore)//output:-[1, 2, 3, 4,  5,6, 7, 8, 9, 10]//in filter we connot return anything .
//it is based on condition mean if condition is ture it will return element of that specific round mean if condition is false it will continue with other element of array  

let newarr=[2,3,4,5,6,7,8,9,10]
const newnum=newarr
            .map((num) => num*10)//the result of frist map is passed to second chained map mean the output of frist map is "[20, 30, 40,  50, 60, 70, 80, 90, 100] "
            .map( (num) => num+1)//and this "passed to second map method" and "the output of second chain map is passed to third filter method"
            .filter( (num) => num>=50 )// output of second map:-[21, 31, 41,  51, 61, 71, 81, 91, 101]
 console.log(newnum)//[51, 61, 71, 81, 91, 101]

