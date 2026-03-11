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
