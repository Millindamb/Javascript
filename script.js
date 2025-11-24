let accountID=4545
let accouuntCity="unknow"

console.table([accountID,accouuntCity])

"use strict"//treat JS code as a newer version

//Data types
// let name="someone"
// let age=45
// let t=true

// let state;//undefined (not yet defined)
// let num=null;//empty
//symbol => unique
//object  

//conversion
// let score="34abc"
// console.log(typeof score)
// let valueInNumber=Number(score)//conversion form string to number
// console.log(typeof valueInNumber)//number
// console.log(valueInNumber)//NaN

// let isLogIn=1;
// let isLogIn="";
// let boolLogIn=Boolean(isLogIn);//false as ""
// console.log(boolLogIn)//true as 1

// Operations
// console.log("2"+4+5)//245
// console.log(4+5+"8")//98

//comparision
// console.log(null>0)//false
// console.log(null==0)//false
// console.log(null>=0)//true
// console.log(null<=0)//true

//primitive 7 (string,int,bool,null,undefined,BigInt,symbol) call by value
const id=Symbol('123')
const anotherId=Symbol('123')

console.log(id===anotherId)//false
//non-primitive (Array,objects,Functions) reference type
//Array
const heros=["someone","another"]
//object
let obj={
    name:'someone',
    age:45
}
//function
const hello=()=>{
    console.log("Hello World")
}

//Memory Allocation
//there are two Types of Memory 
//the premitive type use the stack 
//and the non primitive type use the heap

//difference
//stack provides copy of the variable
//heap provides the reference(Address) of the variable

let myYoutube="Someone"
let anotherYoutube=myYoutube
anotherYoutube="Another"
// console.log(myYoutube)//the older value as it is pass my Copy()
// console.log(anotherYoutube)


let user1={
    name:"Hello",
    age:55
}
let user2=user1//pass by reference
user2.name="World"//this will change in the original Address

console.log(user2.name)
console.log(user1.name)

//string (Modern syntax)
console.log(`this is the example of string interpolation,${5-8}`)

const gameName=new String("Hello world")//this is another way to create String
console.log(gameName)

//string methods like:substring,slice,replace,trim and etc

//Number and Maths
const num1=101
const num=new Number(101)
console.log(num1)
console.log(num)
console.log(num.toString().length)
console.log(num.toFixed(2))//number of values after decimal

const othernum=454.89
console.log(othernum.toPrecision(3))//used for round off like round off of 3 digit or more

const Hunderds=100000
console.log(Hunderds.toLocaleString())//will assign commas according to the USA values
console.log(Hunderds.toLocaleString('en-IN'))//will assign commas according to the Indian values

//Maths(Library)
console.log(Math);
console.log(Math.abs(-55))//will convert the negative to the positive value
console.log(Math.round(45.33))//will convert value to its round off
console.log(Math.ceil(4.45))//will convert to upper round off value
console.log(Math.floor(4.45))//will convert to lower round off value
console.log(Math.min(1,2,4,6))//will give the minimum value in the array
console.log(Math.max(2,5,6,8,9))//will give the maximum value in the array

//Math Random
console.log(Math.random())//will give a random value form 1 to 0
console.log(Math.random()*10)//will give random value form 0 to 10
console.log((Math.random()*10)+1)//will give a random value form 1 to 10
console.log(Math.floor(Math.random()*10)+1)//will give the round off value

const min=10;
const max=100;
//to get values form minimum range to maximum range
console.log(Math.floor(Math.random()*(max-min+1))+min)