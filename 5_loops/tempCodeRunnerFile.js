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
let grant=shoppingCart.reduce((acc,curr)=>(curr["quantity"]*curr["price"])+acc,0)
console.log(grant)