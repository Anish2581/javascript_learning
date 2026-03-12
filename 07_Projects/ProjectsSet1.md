#  project related to dom 

## project link

[click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# solutions
## project 1
```javascript
const buttons = document.querySelectorAll(".button")

buttons.forEach((button)=>{
  button.addEventListener("click",function (e){
    console.log(e)
    console.log(e.target)
    const body=document.querySelector("body");

    // method 1
    // switch(e.target.id){
    //   case "grey":
    //     body.style.backgroundColor = e.target.id;
    //     break
    //   case "white":
    //     body.style.backgroundColor = e.target.id;
    //     break
    //   case "blue":
    //     body.style.backgroundColor = e.target.id;
    //     break
    //   case "yellow":
    //     body.style.backgroundColor = e.target.id;
    //     break
    //   case "purple":
    //     body.style.backgroundColor = e.target.id;
    //     break
    //   default:
    //     body.style.backgroundColor = e.target.id;
    // }

    // method 2
    // body.style.backgroundColor=e.target.id

    // method 3
    // if(e.target.id==="grey"){
    //   body.style.backgroundColor=e.target.id
    // }
    // if(e.target.id==="white"){
    //   body.style.backgroundColor=e.target.id
    // }
    // if(e.target.id==="blue"){
    //   body.style.backgroundColor=e.target.id
    // }
    // if(e.target.id==="yellow"){
    //   body.style.backgroundColor=e.target.id
    // }
    // if(e.target.id==="purple"){
    //   body.style.backgroundColor=e.target.id
    // }
    //  if(e.target.id==="red"){
    //   body.style.backgroundColor=e.target.id
    // }
    
  })
})

```
## project 2
``` javascript
const form=document.querySelector("form")
console.log(form)

form.addEventListener("submit",(e)=>{
    e.preventDefault()
    const height=parseInt(document.querySelector("#height").value)
    const weight=parseInt(document.querySelector("#weight").value)
    const result = document.querySelector("#results")
    if(height === "" || height < 0 || isNaN(height)){
      result.innerHTML=`please enter valid height ${height}`
    }else if(weight === "" || weight < 0 || isNaN(weight)){
      result.innerHTML=`please enter valid weight ${weight}`
    }
    else {
      const bmi =  (weight / ((height * height) / 10000)).toFixed(2);
      if(bmi<=18.6){
        result.innerHTML=`<span>${bmi}</span><br /><span>under weight</span>`
      }else if( bmi>=18.7&& bmi<=24.9){
        result.innerHTML=`<span>${bmi}</span><br /><span>normal weight</span>`
      }
      else{
        result.innerHTML=`<span>${bmi}</span><br /><span>overweight weight</span>`
      }
    }
    
})
```
## project 3

```javascript 
const time = document.querySelector("#clock")

setInterval(()=>{//seInterval take two argument in which frist is function that to be call and time interval mean in which interval of time the function run repetatively
  time.innerHTML=new Date().toLocaleTimeString()
},1000)
```

## project 4
``` javascript
let random=parseInt(Math.random()*100+1)

const userInput=document.querySelector(".guessField")
const submit=document.querySelector("#subt")
const guesses=document.querySelector(".guesses")
const remaining=document.querySelector(".lastResult")
const lowOrHi=document.querySelector(".lowOrHi")
const newg=document.querySelector(".resultParas")
let prevgussed=[]

const p =document.createElement("p")

let count=1


let player=true
if(player){
  submit.addEventListener("click",(e)=>{
  e.preventDefault()
  validateGuess(parseInt(userInput.value))
})}

function validateGuess(guess){
  if(isNaN(guess)){
   alert("please enter a valid number")
  }else if (guess<0){
    alert("Please enter a valid Number greater than One")
  }else if (guess>100){
    alert("please enter a valid number less than 100")
  } else {
    if(count === 11){
    displayMessage(`Game Over . currect number is ${random}`)
    endGame()
  } else {
    prevgussed.push(guess)
    count++
    displayGuess(guess)
    checkGuess(guess)
  }
 }
}

function checkGuess(guess){
  if(guess === random){
    displayMessage('you won!')
    endGame()
  } else if(guess<random){
    displayMessage(`Number is TOO low`)
  } else{
    displayMessage("Number is TOO high")
  }
}

function displayGuess(guess){
  userInput.value=""
  guesses.innerHTML += `${guess},`
  remaining.innerHTML = `${11-count}`
}


function displayMessage(messege){
  lowOrHi.innerHTML=messege 
}

function endGame(){
  userInput.value=""
  userInput.setAttribute("disable","")
  player=false
  p.innerHTML=`<h2 id="newGame">Start a new game</h2>`
  newg.append(p)
  newGame()
}

function newGame(){
  const newgame=document.querySelector("#newGame")
  newgame.addEventListener("click",(e)=>{
    random=parseInt(Math.random()*100+1)
    prevgussed=[]
    player=true
    count=1
    remaining.innerHTML = `${11-count}`
    userInput.removeAttribute("disable")
    userInput.value=""
    guesses.innerHTML= ""
    newg.removeChild(p)
    lowOrHi.innerHTML=""
  })
}
```