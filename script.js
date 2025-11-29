//projects
const buttons=document.querySelectorAll('.button')
const body=document.querySelector('body')

console.log(buttons)
for(const btn in buttons){
        document.addEventListener("click",(e)=>body.style.backgroundColor=e.target.id
)}