const accontid=1234
var accountbalance="23453"//when we declare variable by using var keyword it will become "global variable"
let accountemail="12@12.com"
accountdetail="visp"
let accountstate//when we not assign any value in this variable it is initialize it by default value "undefined"
console.log("accountid =",accontid," accountbalance =",accountbalance,"accountemail =",accountemail,"accountdetail =",accountdetail,"accountstate=",accountstate)

// accountid=3222;//its a const variable we can't change it 
var accountbalance="111"
accountemail="22@gmail.com"
accountdetail="vvip"
console.log("accountid =",accontid," accountbalance =",accountbalance,"accountemail =",accountemail,"accountdetail =",accountdetail)
if(true){
    var accountbalance="4312"//when i change this variable upper "accountbalance" variable also change 
    let accountemail="anish@gmail.com"//and when we create variable using let keyword it will become "local variable"
    console.log(accountbalance,accountemail)
}
    console.log(accountbalance,accountemail)