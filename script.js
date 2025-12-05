//async javascript fundamental

//as default javascript is a synchronous and single threaded language 

// there two types of code: Blocking Code and Non Blocking Code 
//blocking code: block the flow of the program
//non blocking code: Does not block execution

// console.log("First")
// setTimeout(() => {
//     console.log("Hello World")
// }, 0);//even if the time is 0,these line will run after printing second
// //as this setime out will work as a call ans in that time the console get run
// console.log("Second")

// //set time out will do the work after a time once
// setTimeout(() => {
//     console.log("Example of setTimeout")
// }, 2000);
// //but setInterval will do the work again and again after that time
// setInterval(()=>{
//     console.log("Example of setInterval")
// },5000)

//how to stop a setTimeout using the clearTimeout function
// const changeMe=setTimeout(()=>{console.log("hello")},2000)
// clearTimeout(changeMe)//this will stop the changeMe 

//setTimeout
const changeHeading=setTimeout(()=>{
    document.querySelector(".heading").innerHTML="Something is Wrong"
},5000)

const btn=document.querySelector(".button")
btn.addEventListener("click",()=>{
    clearTimeout(changeHeading)
    console.log("Changes Stoped")
})

//setInterval

const sayDate=(name)=>{
    console.log("hello",name,"the Time is :",Date.now().toString())
}
let interval
const stBtn=document.querySelector("#start")
const spBtn=document.querySelector("#stop")

spBtn.addEventListener("click",()=>{clearInterval(interval)})
stBtn.addEventListener("click",()=>{interval=setInterval(sayDate,5000,"User")})

//Project: Color Changer
//generate a random color in hex code

const randomColor=()=>{
    const hex="0123456789ABCDEF"
    let color="#"
    for(let i=0;i<6;i++){
        const idx=Math.floor(Math.random()*16)
        color+=hex[idx]
    }
    return color
}
let colorChanger
const spColor=document.querySelector("#spColor")
const stColor=document.querySelector("#stColor")
const bg=document.querySelector("body")
spColor.addEventListener("click",()=>{
    clearInterval(colorChanger)
    colorChanger=null;//as there is no use of the colorChanger (for optimization) dereference
})
stColor.addEventListener("click",()=>{
    if(!colorChanger){
        colorChanger=setInterval(()=>{
            const color=randomColor()
            bg.style.backgroundColor=color
        },2500)
    }
})

//project 2 key tracker
const insert=document.querySelector("#insert")
window.addEventListener('keydown',(e)=>{
    insert.innerHTML=`
    <table>
        <tr>
            <th>key</th>
            <th>keyCode</th>
            <th>code</th>
        </tr>
        <tr>
            <td>${e.key}</td>
            <td>${e.keyCode}</td>
            <td>${e.code}</td>
        </tr>
    </table>
    `
})