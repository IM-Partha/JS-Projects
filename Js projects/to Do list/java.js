const inputs = document.getElementById("inp");
function add(){
    if(inputs.value == ""){
        alert("Enter Task")

    }
    else{
        const list =document.createElement("li")
        list.innerHTML = `${inputs.value}<span class="material-symbols-outlined">
        delete
        </span>`
        
        const show = document.querySelector(".display");

        show.appendChild(list)
        list.querySelector("span").addEventListener('click',remove);
        function remove(){
            list.remove()
            
        }
    }
    inputs.value =''
   
}
