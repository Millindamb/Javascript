const Tinder=new Object()
Tinder.name="Someone"
Tinder.id="id4545"
Tinder.age=454
// console.log(Tinder)

const regularUser={
    id:101,
    Information:{
        Biodata:{
            name:"Someone",
            age:55
        }
    }
}
// console.log(regularUser["Information"]["Biodata"]["name"])
// console.log(regularUser.Information.Biodata.name)

//how to combine Objects
const obj1={1:"one",2:"two"}
const obj2={3:"Three",4:"Four"}
//Way1: const obj3={obj1,obj2}//this will store the two object inside a single object
//Way2: const obj3=Object.assign(obj1,obj2)//to combine two Objects or by
//Way3:this is also do the same work of combining the object (the correct one) as the first empty object act as a source
const obj3=Object.assign({},obj1,obj2)
//Way 4:by using the Spread Method
const obj4={...obj1,...obj2}
// console.log(obj3)
// console.log(obj4)

//How to handle Object inside Array from the DataBase
const Data=[
    {
        id:1,
        name:"Someone"
    },
    {
        id:2,
        name:"another"
    },
    {
        id:3,
        name:"Someone2"
    }
]

//ways to access the data form the array
// console.log(Data[1].id)//to access the data inside the object which is inside the Array
// or by using the map function
// Data.map((obj)=>console.log(obj.name))
//or by using the Onject.keys function
// console.log(Object.keys(Data))//this will provide all the keys in a single Array 
// console.log(Object.values(Data))//this will provide all the values in a single Array 
// console.log(Object.entries(Data))
// console.log(Data.hasOwnProperty('1'))//will check for the property is avaliable in the object pr not

//destructuring
const course={
    coursename:"javascript",
    price:99999,
    instructor:"Someone"
}

// how to extract a particuler value from object
const {instructor}=course
console.log(instructor)
// or we can also make a short cut for it 
const {coursename:cn}=course
console.log(cn)

//JSON
//json looks like this
// {
//     "name":"Someone",
//     "age":"44"
// }

//Functions and Parameter
function sum(num1,num2){//here num1,num2 are the parameter
    console.log(num1+num2)
}

sum(1,2)//1 and 2 are the arguments

//function which return something
function sub(num1,num2){
    return num1-num2;
}
console.log(sub(4,2));

//using rest operator(...)
// (...) is the spread and the rest operator 
function calculateCartPrice(...num1){//this will take all the argments and will save them inside a array
    return num1
}

console.log(calculateCartPrice(100,200,300))

//how to pass object in function 

const User={
    name:"Someone",
    price:666
}

function handleObject(anotherUser){
    console.log(`the name of the user is ${anotherUser.name} and the price of item is ${anotherUser.price}`)
}

handleObject(User);

//how to pass Array inside a funtion
const arr=[1,2,3,4,5,6]
function handleArray(arr){
    for(let i=0;i<arr.length;i++){
        console.log(arr[i])
    }
}

handleArray(arr)