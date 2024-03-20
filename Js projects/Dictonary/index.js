const inputs= document.querySelector("#inputs")
const serach= document.querySelector("#serach");
const display= document.querySelector("#dis")

serach.addEventListener('click',async()=>{
    const val= inputs.value;
    if(val===''){
        alert("Enter Word")
    }
    else{
        const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${val}`;
        let meaning=await fetch(url);
        meaning= await meaning.json()
        meaning.map((mean)=>{
            console.log()
            display.textContent= mean.meanings[0].definitions[0].definition
        })
    }
})