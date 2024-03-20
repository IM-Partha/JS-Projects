const btn1= document.querySelector("#btn1")
const btn2= document.querySelector("#btn2")
const btn3= document.querySelector("#btn3")

const ouput = document.querySelector("#out")
let counter=0;
btn1.addEventListener('click',()=>{
    counter--
    ouput.innerHTML= counter
})
btn2.addEventListener('click',()=>{
    counter=0
    ouput.innerHTML= counter
})

btn3.addEventListener('click',()=>{
    counter++
    ouput.innerHTML= counter
})