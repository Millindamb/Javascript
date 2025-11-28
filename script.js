//filter and map
const num=[1,2,3,4,5,6,7,8,9]
const nums=num.filter((item)=>item>5)
console.log(nums)

//using multiple map and filter at once
let newnums=num.map((item)=>item*10).map((item)=>item+5).filter((item)=>item>=55)
console.log(newnums)

//reduce method 
let numbers=[1,2,3,4,5,6]

//using the arrow function(Shorter)
const initialvalue=0
let sum=numbers.reduce((totalSum,currVal)=>currVal+totalSum,initialvalue)//here the totalSum is know as the Accumbelator

console.log(sum)
//in the reduce method 
//at the start of the method it will add the valur of the initial value to the totalsum
//then one by one add the value in the totalSum and at the last will return the total sum

//same code with function syntax
sum=numbers.reduce(function(acc,currVal){
    console.log(`the currTotal is : ${acc} , the currVal is : ${currVal}`)
    return acc+currVal
},3)

console.log(sum)

//using reduce method to add all the prices of the courses
const courses=[
    {
        course:"js",
        price:999
    },
    {
        course:"c++",
        price:899
    },
    {
        course:"java",
        price:759
    },
    {
        course:"HTML",
        price:199
    }
]

const TotalPrice=courses.reduce((total,course)=>total+course.price,0)
console.log("the total price of the courses is : "+TotalPrice)

//DOM Manupulation Introduction 

// document.getElementById('box').innerHTML='<h1 style="color: white;">Something</h1>'
title=document.getElementById('box')
title.style.backgroundColor='blue'
title.style.borderRadius="15px"
title.style.border="2px solid"

console.log(title.innerHTML)
console.log(title.innerText)//this will only show the visible text
console.log(title.textContent)//this will also show the hidden text

const x=document.querySelectorAll('.listId')//#for class//this will give the Array of nodeList
x.forEach((i)=>i.style.backgroundColor='gray')

const y=document.querySelector('ul')
const w=y.querySelector('li')
w.style.backgroundColor="green"
const collection=document.getElementsByClassName("listId")//this will give a HTML collection of the elements
const normalArr=Array.from(collection)//converting the HTML collection to normal array
normalArr.forEach((l)=>console.log(l.tagName))//using the forEach method on the normal array as we cannot use forEach on the HTML collection
normalArr.map((s)=>console.log(s.tagName))