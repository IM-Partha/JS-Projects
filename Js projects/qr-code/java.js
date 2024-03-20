const input =document.getElementById("inp");
const button = document.getElementById("btn");
const image = document.getElementById("qr_img")


button.addEventListener('click',()=>{
    const inputValue= input.value;
    if(inputValue === ''){
        alert("Enter Something")
    }
    else{
        image.src= `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputValue}`
        image.alt= `Qr Code for ${inputValue}`;
    }
})