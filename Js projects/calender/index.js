const month = document.querySelector(".month");
const Week = document.querySelector(".Week");
const day= document.querySelector(".day");
const year= document.querySelector(".year")


window.addEventListener("DOMContentLoaded",()=>{
    const date= new Date();

    Week.textContent = date.toLocaleDateString("en-US",{weekday:"long"})
    year.textContent = date.getFullYear();
    month.textContent = date.toLocaleDateString("en-US",{month:"long"})
    day.textContent = date.getDate();
})