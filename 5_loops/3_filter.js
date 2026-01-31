// let arr=["python","javascript","c","c++"]

// let value=arr.forEach( (item) =>{//forEach loop not return any value therefore the output is "undefined"
//     console.log(item)
//     return item
// })

// console.log(value)//output:-undefined

//filter method:-in forEach loop we connot able to  return any value but in filter loop we can return value 
//the syntax is same as forEach loop EX:-

let arr1=[1,2,3,4,5,6,7,8,9,0,10]
// const newnum=arr1.filter( (num)=> num>3)//filter method will return and array which satisfy the condition not a single value
// console.log(newnum)//output:-[4, 5,  6, 7, 8, 9, 10]


// const newnum=arr1.filter( (num)=> {//this will gives same output
//     return num>3  //return true value and filter method will push that argument in an given variable
// })//filter method will return and array which satisfy the condition not a single value
// console.log(newnum)//output:-[4, 5,  6, 7, 8, 9, 10]

//if we have to do this using forEach loop .
//  so we have to make global variable which store ture values in it and then we can print that global variable
//EX:-
// const saveElement=[]
// arr1.forEach( (num) => {
//     if (num>3){
//         saveElement.push(num)
//     }
// })
// console.log(saveElement)//output:-[4, 5,  6, 7,8, 9, 10]
 
const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 2003, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  // let userBooks = books.filter( (bk) => bk.genre === 'History')//it will return whole bk if it is true 
  // console.log(userBooks)
  //output:-[//
//{
//    title: 'Book Three',
//    genre: 'History',
//    publish: 1999,
//    edition: 2007
//},
//{
//    title: 'Book Seven',
//    genre: 'History',
//    publish: 1986,
//    edition: 1996
//}
//]

const userBooks=books.filter( (bk) => bk.publish>2000&&bk.genre==="Fiction")//this will gives the book which is publish after 2000
console.log(userBooks)//[{ title: 'Book Six', genre: 'Fiction', publish: 2003, edition: 2010 }]