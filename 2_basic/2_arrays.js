const marvel_heros=["ironman","spiderman","hulk"]
const dc_heros=["superman","batman","flash"]

marvel_heros.push(dc_heros)
// console.log(marvel_heros)//[ 'ironman', 'spiderman', 'hulk', [ 'superman', 'batman', 'flash' ] ]
// console.log(marvel_heros[3])//[ 'superman', 'batman', 'flash' ]
// console.log(marvel_heros[3][2])//'flash'
// console.log(((marvel_heros.join()).split(",")))//[ 'ironman', 'spiderman', 'hulk', 'superman', 'batman', 'flash' ]

// const all_heros=marvel_heros.concat(dc_heros)//push method will add element at the same array 
//                                             while concat method will combine two array and return a new array
//  console.log(all_heros)//[ 'ironman', 'spiderman', 'hulk', 'superman', 'batman', 'flash' ]


// //  const all_new_heros=[...marvel_heros,...dc_heros]
// //  console.log(all_new_heros)//[ 'ironman', 'spiderman', 'hulk', 'superman', 'batman', 'flash' ]
//  //breaking glass method:- it is use "..." operator to break the arrays 
//  // and it is "more sufficient as well as powerfull than "concat" method"
 
//  //because in concat method we can add or merge only two arrays but 
//  // in "breaking glass method" we can add or merge more than two arrays "


//  //flat :- it will flat the array according to layer mentioned in flat function
//  //        and return the new array 


//  let newarr3=[1,2,3,[3,5,6],[4,[3,2]]]
//  let store=newarr3.flat()//if no arrument is passed then its by default take "1"
//  console.log(newarr3)//[ 1, 2, 3, [ 3, 5, 6 ], [ 4, [ 3, 2 ] ] ]//arrays are unchanged
//  console.log(store)//[ 1, 2, 3, 3, 5, 6, 4, [ 3, 2 ] ]
// // store=newarr3.flat(2)//layer of flat =2//[1, 2, 3, 3, 5, 6, 4, 3, 2]
// store=newarr3.flat(Infinity)//layer of flat =2
//  console.log(store)

 console.log(Array.isArray(["Anish"]))//varify wether is array or not//true //if isArray("Anish")->false
 console.log(Array.from("Anish"))//convert any data into array

 let score1=100 
 let score2=200 
 let score3=300 

 console.log(Array.of(score1,score2,score3))//Returns a new array from a set of elements.

 console.log(score1)
