
const parent=document.querySelector('.parent')
console.log(parent)
// console.log(parent.children[0].innerText)

for (let i = 0; i < parent.children.length; i++) {
    console.log(parent.children[i].innerText)
    parent.children[i].style.backgroundColor="gray"
    parent.children[i].style.color="black"
    parent.children[i].style.border="2px solid black"
    parent.children[i].style.display="flex"
    parent.children[i].style.justifyContent="center"
    parent.children[i].style.borderRadius="5px"
}

// console.log(parent.firstElementChild)//will give the first child of the parent
// console.log(parent.lastElementChild)//will give the last child of the parent

const dayOne=parent.firstElementChild
console.log(dayOne.parentElement)

const another=document.querySelector(".Another")
const div=document.createElement('h1')
div.className="main"
div.style.backgroundColor="gray"
div.style.border="2px solid black"
div.style.borderRadius="5px"
div.style.color="black"
const text=document.createTextNode("Hello World")
div.appendChild(text)
console.log(div)
another.appendChild(div)

//DOM
function addLanguage(langName){//this is not the Optimal Approach to append a child 
    //at it treverse the whole tree to append the child
    const li=document.createElement('li')
    li.innerText=langName
    document.querySelector('.language').appendChild(li)
}
// addLanguage("Python")
// addLanguage("C++")
function addLanguageOptimal(langName){
    const li=document.createElement('li')
    li.appendChild(document.createTextNode(langName))//Appending the language name in the li
    document.querySelector('.language').appendChild(li)   
}
addLanguageOptimal("Python")
addLanguageOptimal("C++")
//the addLangaugeOptimal is optimal as compared to the addLangauge as it do not treverse the whole tree to append the text

//Edit
const li2=document.querySelector("li:nth-child(2)")//mark the 2nd Child of li
const newLi=document.createElement("li")//created a new li element
newLi.appendChild(document.createTextNode("Mojo"))//change the text of the li
li2.replaceWith(newLi)//replace the new li with the old li

//second-way to change the text
const firstLang=document.querySelector("li:first-child")
firstLang.outerHTML='<li>React</li>'

//how to remove a Element
const lastLang=document.querySelector("li:last-child")
lastLang.remove()