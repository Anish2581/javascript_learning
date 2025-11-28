function addTwoNumber(n1,n2){
    return n1+n2
}

let result=addTwoNumber("r","t",null)//when we pass no argument it will return NaN and 
// when we pass more than mentioned argument it will automatically take first mention value as a parameter
console.log(result)

function loggedIn(username){
    if(!username){//undefined ->false
        console.log("please enter your name")
        return
    }
    return `${username}, is logged in`
}

console.log(loggedIn())//when we pass no argument it will take parameter as "undefined"
console.log(loggedIn("Anish"))

// function calculateCartPrice(...input){//"..." operator is rest/spread operator depend on use case , here "..." operators is rest operator
//     return input//when we use "..." inside the function parameter it can take many variable and return it in arrary format
// }
// console.log(calculateCartPrice(3,4,5,6,4,3,2,))//[3, 4, 5, 6,4, 3, 2]


function calculateCartPrice(var1,var2,...input){//"..." operator is rest/spread operator depend on use case , here "..." operators is rest operator
    return input//when we use "..." inside the function parameter it can take many variable and return it in arrary format
}
console.log(calculateCartPrice(300,400,560,980))//[560,980]

let user={
    fname:"Anish",
    lname:"Gupta"
}

function handleObject(myobj){
console.log(`my frist name is ${myobj.fname} and last name is ${myobj.lname}`)
}
handleObject(user)//when we pass not any argument in this it will thow an error //output:-my frist name is Anish and last name is Gupta
handleObject({fname:"harsh",lname:"gupta"})//output:-my frist name is harsh and last name is gupta

let array=[500,800,900]
function returnSecondValue(anyArray){
    console.log(anyArray[1])
}
returnSecondValue(array)//output:-900
returnSecondValue([100])//when index is not found it will return "undefined" //output:-undefined