const input1 =document.querySelector("#input1")
const input2 = document.querySelector("#input2")
const output = document.querySelector("#button")
const displays= document.querySelector("#output")

output.addEventListener('click',()=>{
   
    if(input1.value ==''){
        alert("Enter Total Amount")
    }
     else if(input2.value ==''){
        alert("Enter tip")
    }
    else if(input1.value<0 || input2.value<0){
       alert("Please Enter positive Value")
    }
    else{
        const val1= Number(input1.value);
        const val2= Number(input2.value);
        let percentage= val1 * (val2/100)
        let total = val1 + percentage;
        displays.innerText= total
    }
    
})