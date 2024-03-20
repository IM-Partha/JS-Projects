const input = document.querySelector("#inp")
const uppercase = document.querySelector("#uppercase")
const lowercase = document.querySelector("#lowercase")
const number = document.querySelector("#number")
const symbol = document.querySelector("#symbol")
const showData= document.querySelector("#show")


const submit = document.getElementById("submit")


submit.addEventListener('click',()=>{
    let up ="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let low ="abcdefghijklmnopqrstuvwxyz"
    let numbers="0123456789"
    let symbols= "!@#$%^&*()_+[]{};:'"
    let str=''
    let password =''

    if(uppercase.checked){
        str+=up
    }   
    if(lowercase.checked){
        str+=low
    }
    if(number.checked){
        str+=numbers
    }
    if(symbol.checked){
        str+=symbols
    }
    for(let i=0; i<input.value; i++){
        let index= Math.floor(Math.random() * str.length);
        password+=str[index]
    }

    showData.value = password
})


