const search = document.querySelector("#search")
const user = document.querySelector("#user");
const Dataarray=[];

let GateUserData = async ()=>{
    let res = await fetch('https://api.github.com/users');
    let data=  await res.json();
    data.map((users)=>{
       
    let li = document.createElement('li');
            li.innerHTML = `
                <div class="user-data">
                    <img src="${users.avatar_url}" alt="${users.login}">
                    <div>
                        <p class="p2">${users.login}</p>
                        <a href="${users.html_url}" target="_blank">${users.html_url}</a>
                    </div>
                </div>
            `;
            
            user.appendChild(li)
            Dataarray.push(li)

    })
}

search.addEventListener('input', () => {
    let val = search.value.toLowerCase();
    Dataarray.forEach((element) => {
        let username = element.querySelector('.p2').innerText.toLowerCase();
        if (username.includes(val)) {
            element.classList.remove('hide');
        } else {
            element.classList.add('hide');
        }
    });
});


GateUserData()