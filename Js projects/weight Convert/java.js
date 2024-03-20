const input = document.querySelector("#inp")
const output = document.querySelector("#out")

input.addEventListener('input',()=>{
    let inputs = input.value 
    let vall= inputs*2.2
    output.innerHTML=vall.toFixed(2)
})