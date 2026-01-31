//----------------------------------REDUCE METHOD----------------------------//
//reduce method:-this method is one of the most important and famous method it use two argument (accumulator,currentValue)
//syntax:- arr.reduce((callback Func),initialValue for accumulator)
// let arr=[1,2,3,4,5]
// let total=arr.reduce( function (accumulator,currentValue){
//     console.log(`acc:${accumulator} curr:${currentValue}`);
//     return accumulator + currentValue
// },0)//reduce method don't know the value of accumulator so after creating callback function we have to give initial value to accumulator in this i give "0"
// console.log(total);//15


//using arrow function:-
// let total=arr.reduce( (acc,curr)=>(acc+curr),0)
// console.log(total)//15

let shoppingCart=[
    {
        item:"tata salt",
        quantity:10,
        price:25
    },
    {
        item:"wheel",
        quantity:4,
        price:63
    },
    {
        item:"Dairy Milk",
        quantity:5,
        price:20
    },
    {
        item:"Milk",
        quantity:10,
        price:27
    }
]

// let totalCost=shoppingCart.map( (item)=>{
//                     for(let key in item){
//                         if (key==="quantity"){
//                             var quantity=item[key]
//                         }
//                         if(key ==="price"){
//                         return item[key]*quantity}
//                     }
//                     })//this will return the price of each item in array format output:-[ 250, 252, 100, 270 ]
//                     .reduce( (acc,curr)=>(acc+curr),0)output:-872

let totalCost=shoppingCart.reduce((acc,item)=>((item.price*item.quantity)+acc),0)
console.log(totalCost)//output:-872


