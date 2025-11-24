//Date and Time 
// const myDate=new Date()
// console.log("Normal : ",myDate)
// console.log("to String : ",myDate.toString())
// console.log("to Date String : ",myDate.toDateString())
// console.log("to TIme String : ",myDate.toTimeString())
// console.log("to ISOString : ",myDate.toISOString())
// console.log("to JSON : ",myDate.toJSON())
// console.log("to local Date String : ",myDate.toLocaleDateString())

let myCreatedDate=new Date(2022,0,22)//year,month,date perticular
console.log(myCreatedDate.toLocaleString())

//Array
const myArr=[0,1,2,3,4,5]//array shares shallow copy of its elements(by reference)
const ele=myArr;
for (let i = 0; i < myArr.length; i++) {
    ele[i]++;
    // console.log(myArr[i])
}

const myArr2=new Array(1,2,3,4,5)

//methods of Array
myArr2.push(6)
myArr2.push(7)
myArr2.pop()
myArr2.unshift(0)//will insert at the Start
myArr2.shift()//will remove form the Start
console.log(myArr2)

console.log(myArr2.includes(9))
console.log(myArr2.indexOf(10))
console.log(myArr2.join())//will convert the Array into string 
console.log(typeof myArr2.join())//string

//slice/splice
//the difference between slice and splice
const Arr=[1,2,3,4,5,6,7,8]
console.log("the Original Array : ",Arr)
const ArrUsingSlice=Arr.slice(1,3)//will copy elements from 1 index to 3-1 index
const ArrUsingSplice=Arr.splice(1,3)//will cut elements from 1 to 3 index form the Original Array
console.log("Using Alice : ",ArrUsingSlice)
console.log("Using Splice : ",ArrUsingSplice)
console.log("The Original Array After using Splice : ",Arr)

//Array in depth
const Marvel=["Ironman","Thor","Captain"]
const DC=["flash","Superman","Batman"]
// const comined=Marvel.push(DC)//this will push the DC array inside marvel array as a element 
// console.log(Marvel)
// console.log(Marvel[3][1])
// const Combined=Marvel.concat(DC)//this will combine both the Array 
// console.log(Combined)

//using the spread operator
const Combined=[...Marvel,...DC]
console.log(Combined)

const ComplexArray=[1,2,3,[4,5,6],7,[8,9,[10,11,12]]]//this is a complex Array
const NormalArray=ComplexArray.flat(Infinity)//this will Flatten the Array to Infinite Depth (the Depth can be 0,1,2,4,5...)
console.log(NormalArray)

const AnotherArray=Array.from("Someone")
console.log(AnotherArray)
console.log(Array.isArray(AnotherArray))

console.log(Array.from({name:"Another"}))//this is a unique case in which we have to define from which values the Array should be created

let Score1=100
let Score2=101
let Score3=102

console.log(Array.of(Score1,Score2,Score3))

//Object 
//whenever we define object from literal then singleton does not form
//but if it is formed SingleTon)
// const usingCons=Object.create({name:"Someone",age:66})
// console.log(usingCons)

//using literals (Does not form Singleton)
const User={
    name:"user101",
    age:45,
    isLoggedIn:false
}
console.log(User.name)
console.log(User["age"])

//How to use Symbol in Object
const aSymbol=Symbol("key")
const aObject={
    [aSymbol]:"key",
    Passkey:123456
}
console.log(aObject[aSymbol])
console.log(typeof aSymbol)

// //how to freeze a value of a object
// Object.freeze(aObject)
// aObject.Passkey=12312

//how to define function in Object 
aObject.greeting=function(){
    console.log("this is a function of the Object")
}
aObject.greetingTwo=function(){
    console.log(`this is also a function of the Object ${this.Passkey}`)//this keyword is used to reference the key of the same Object
}
console.log(aObject.greeting())
aObject.greeting()
console.log(aObject.greetingTwo())