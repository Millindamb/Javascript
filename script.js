//global and scope in js
{}//this is a scope

let a=100;

if(true){
    let a=10
    const b=20
    var c=30
    console.log(`the value a Inside Scope : ${a}`)
}

console.log(`the value of a Outside Scope is : ${a}`)
// console.log(a) this is not accessed out of the Scope
// console.log(b) this is also not accessed out of the Scope
console.log(c)//this is Accessed out of the Scope


//Scope Level{nested Scope}
function one(){
    const name="Someone"
    function two(){
        website="Another"
        console.log(name)//we can access the varaible of the outer(one) scope
    }
    // console.log(website)//we cannot access the varaible of the inner(two) scope
    two()
}

one()

//hosting
console.log(addone(5))//this will print 6 and will not gibve any error
function addone(num){
    return num+1
}

// console.log(addtwo(4))//this will give error
const addtwo=function(num){
    return num+2
}

//how we can use a function it depends on how we define it

//THIS and arrow function

//this keyword is used to refere current context(variable)
const websiteDetail={
    name:"aUser",
    host:"/5453",
    Welcome:function(){
        console.log(`hello ${this.name}`);
        console.log(this)//this will print about the current context(values,variable)
    }
}

websiteDetail.Welcome()
console.log(this)//in browser this will refere to the window object(through which we access all the events)
//but in terminal this will be a empty object because of the node

function chai(){
    // console.log(this) this will print all the inbuild properties of the chai function
}
chai()

//Arrow function
const arrow=()=>{
    console.log("this is a Arrow function")
}
arrow()

//normal arrow function
const sum=(num1,num2)=>{
    return num1+num2
}
//another way to write this function (implicit return) in less syntax
const sum1=(num1,num2)=>num1+num2
const sum2=(num2)=>({num1:num2})//sane syntax but parenthese are used to return a object implicitly
// implicit means returning something with out writing the return keyword
console.log(sum1(1,2))
console.log(sum2(5))

console.log("----------------------------IIFE----------------------------");
//Immediately Invoked Function Expressions (IIFE)
//IIFE are used when the variables or things get pollute from the Global Scope

// syntax
// (function definition)()
// example of IIFE with function
(function fun(){
    console.log("this is a example of IIFE");
})();
// example of IIFE with arrow function
(()=>{console.log("this is also a example of IIFE")})();
//example of IIFE with parameters
((num)=>console.log(num))(4);
((name)=>console.log("hello",name))("Someone")


//Execution of the code in java Script
//javascript Execution Context: how javascript your code 
//at the very start the common thing is the Global Execution Context
//the this referces to the the Global Execution Context(Window Object)

//after the Global Exection context 
// the javascript code get executed in to phase
// 1) Memory Creation and Phase
// and 2) Execution Pahse

// in memory exe phase the memory for the variable and the functions are defined
//in the Execution phase all the calculation like +,- took place

// Example with code (Dryrun)
// Code:
let val1=10
let val2=20
function addNum(num1,num2){
    let total=num1+num2
    return total
}
let result = addNum(val1,val2)
let result2 = addNum(1,2)

//Execution of the Code
// Step 1:
// Global Execution

// Step 2: Memory Creation Phase
// val1->undefined
// val2->undefined
// addNum->definition
// result1=undefined
// result2->undefined

//Step3: Execution Phase
val1=10
val2=20
// then for the function there is the definition of the function

//then call for the function for the val1,val2
// in this call the new Executional context will be created for the function 
// the Box (Executional context) is created every time a function is Call,this box contains New variable enviorment and Execution Thread

//now for the add number the Memory creation and the execution phase will be re-execute
//memory phase for the result1
val1=undefined
val2=undefined
total=undefined
//execution context
val1=10
val2=20
num1=10
num2=20
total=30
// now this total is returned to the global executional context
// then the executional context created for the function call get deleted

// now for the result2
// same thing will get executed
// first the memory creation execution
// then second the executon phase
// then in the execution pahse the executional context will be created for the function call for the addNum