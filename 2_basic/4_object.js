const instaUser=new Object()
// const instaUser={}//both are same
// console.log(instaUser)
instaUser.name="Harsh"
// console.log(instaUser)
instaUser.email="harsh@gmail.com"
instaUser.isloggedin=false

console.log(instaUser)//{ name: 'Harsh', email: 'harsh@gmail.com', isloggedin: false }
console.log(Object.keys(instaUser))//return an array of keys of an object //[ 'name', 'email', 'isloggedin' ]
console.log(Object.values(instaUser))//[ 'Harsh', 'harsh@gmail.com', false ]
console.log(Object.entries(instaUser))//return an nested array where frist value is key and second value is value 
//[
//[ 'name', 'Harsh' ],
//[ 'email', 'harsh@gmail.com' ],
//[ 'isloggedin', false ]
//]
console.log(instaUser.hasOwnProperty("isloggedin"))//true
console.log(instaUser.hasOwnProperty("islogg"))//false


// const tinder={
//     email:"js@s.com",
//     username:{
//         fullname:{
//         firstname:"Anish",
//         lastname:"Gupta"
//         },
//     }
// }
// console.log(tinder.username)
// console.log(tinder.username.fullname?.firstname)//"?" operator use when we are not sure it is present or not "to prevent runtime error" if fullname is not present "it return undefined
//" if we do not add ? (optional chaining operator) and fullname is not present it thow error to prevent this error we use ? operator
const target={1:"a",2:"b"}
const obj2={3:"c",4:"d"}
//**there are three ways to merge object**

//1:-normal
// const obj3={obj1,obj2}//{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }

//2:-using method
// const obj3=Object.assign({},target,obj2)//both gives the same output but "different target here target is empty "{}" object
// const obj3=Object.assign(target,obj2)//Object.assign(target,source)  //Copy all source into target and Returns the target object. target-->obj1
// console.log(target)//{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' } it will update automatically "because of Object.assign method"
// console.log(target==obj3)//true

//3:-using breaking glass method
const obj3={...target,...obj2}
console.log(obj3)

//** object destructorization  **

const user={
    name:"Anish",
    freelanceFee:"999",
    email:"anish@gmail.com"
}
// console.log(user.name)//to avoid this "user.name" we use object destructorization

// const {freelanceFee}=user
// console.log(freelanceFee)//999
//we can also rename it 

const {freelanceFee:Fee,name:name}=user
console.log(Fee)//999
console.log(name)


// +++++++++++++++++++++++++ json ++++++++++++++++++++++++++:-when we use api it will gives output in json format
//in json format only keys are also in string format mean in "" double colon 

//1.format:-
// {
//     "name":"Anish",
//     "rollno":"162",
//     "favSubject":"Physics"
// }

//2.format:-
[
    {},
    {},
    {}
]