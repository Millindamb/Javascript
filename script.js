//Control flow
//if
let condition=true;
if(condition){
    //scope
    console.log("this is the scope of the if block")
}

const something=2

//switch case
switch (something) {
    case 1:
        console.log("the value was 1")
        break;

    case 2:
        console.log("the value was 2")

    default:
        break;
}

//the use ?? operator
// ?? is used when we have to assign value form a result and he have dought that the 
// value can can be null or undefined so to prevent form null and undefined we use the ?? operator

const val=null ?? 4
console.log(val)

const digit=null ?? undefined ?? 66
console.log(digit)

//Loops (iterations)
//there are three type of loops in javascript
//for loop
//while loop
//do-while loop

//keywords like: break and continue
for (let i = 1; i < 11; i++) {
    if(i==2)continue//will skip the below code when i==2
    if(i==5)break//will break out of the loop when i==5
    // console.log(i)
}

//High Order Loop for Array
//For of 
const arr=[1,2,3,4,5,6]
// for(const i of arr)console.log(i)
const name="Someone"
// for(const a of name)console.log(a)

//Map
const map=new Map()
map.set(1,"Someone")
map.set(2,"Another")
map.set(3,"Someone-Else")
// console.log(map)

// for(const key of map)//console.log(key)//this loop will print both key and value together
//to destructure the key value pair
// for(const [key,value] of map)console.log("the key is : "+key," the value is : "+value)

//as we cannot use for of loop on object 
//For in loop for object 

const myObj={
    js:"javascript",
    cpp:"C++",
    rb:"ruby",
}

for (const key in myObj) {
    // console.log(key+" "+myObj[key])
}
//for in loop if used on Array then will give the key(index) of the array

//For Each function
const numbers=[78,4,44,4,4,55,55,4,4,4]
// numbers.forEach((i)=>console.log(i))
//or by using 
function print(number){
    // console.log(number)
}
numbers.forEach(print)

numbers.forEach((item,index,arr)=>console.log(`the ${item} is Stored at ${index} in the arr ${arr}`))

//how to iteratate on Array of objects
const Languages=[
    {
        languageName:"javaScript",
        languageFileName:"js"
    },
    {
        languageName:"java",
        languageFileName:"java"
    },
    {
        languageName:"c++",
        languageFileName:"Cpp"
    }
]
Languages.forEach((eachObj)=>console.log(eachObj.languageName))