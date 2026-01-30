const brr=["js","python","c","cpp"]

// brr.forEach(function (item) {
//     console.log(item)
// })//it use forEach loop and we no need to give any size of array it will automatically called and return value

// brr.forEach( (item) => {
//     console.log(item)
// })//it use forEach loop and we no need to give any size of array it will automatically called and return value

 let printme=(item) => console.log(item)
brr.forEach(printme)//We can also make function and then use this in forEach.
//  but we have to pass a refrence not call in forEach


let lan=[
    {
        language:"Javascript",
        languageFileName:"js"
    },
    {
        language:"Python",
        languageFileName:"py"
    },
    {
        language:"C++",
        languageFileName:"cpp"
    }
]

lan.forEach((item)=>{
    for(let i in item){
        console.log(`${i}-->${item[i]}`)
    }
    console.log("")
})
