//API Call using XMLhttpsRequest(the old method before fetch)
const URL=`https://api.github.com/users/millindamb`

const xhr=new XMLHttpRequest()//making the object of the XMLHttpRequest class to use it

xhr.open('GET',URL)//defining the use and the url of the api(this will not track the status continously)

xhr.onreadystatechange=function(){//this will continously track if the status of the api call change and perform the work

    // console.log(xhr.readyState)//printing the status of the api call

    if(xhr.readyState===4){
        // const profileInfo=JSON.parse(this.responseText)//convertint the string data into object
        // console.log(profileInfo.followers)
    }
}

xhr.send()//sending the request

//About Console
//console is a debugger tool and this is injected during the runtime
//V8 engine provides all the debugger tool 

//Promise 
//promises are either consume or created
//mainly promise are consume, Example:

//first way
const promiseOne=new Promise((resolve,reject)=>{//here the arrow function is a call back
    setTimeout(() => {
        // console.log("task is Complete")
        // resolve()
        // reject()
    }, 2000)
})

promiseOne.then(()=>{//this function will work if the promise gets resolved
    // console.log("promise is resolved")
})

promiseOne.catch(()=>{//this will work when the promise get rejected
    //console.log("promise is rejected")//and will give a error
})

//second way
new Promise((resolve,reject)=>{
    setTimeout(() => {
        // console.log("2nd task is Complete")
        resolve()
    }, 2000)
})//.then(()=>{console.log("2nd promise is completed")}).catch(()=>{console.log("2nd promise got rejected")})

//third way: passing parameter from promise to then by using the resolve 
const promiseThird=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve({userName:"Something",age:45})
    },1000)
}).then((userInfo)=>{//here userInfo is a object passed by the resolve
    // console.log(`user name is :${userInfo.userName} and age of the user is :${userInfo.age}`)
})

//fourth way
const promiseFour=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let error=true
        if(!error){
            resolve({userName:"Something",age:45})
        }else{
            reject("Something went wrong")
        }
    },5000)
})
.then((user)=>{
    return user.userName
})
.then((username)=>{
    console.log(username);
})
.catch((errorMsg)=>{
    // console.log(errorMsg)
})

//fifth way: using async await
const promiseFive=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let error=true
        if(error){
            resolve({userName:"js",password:4545})
        }else{
            reject("ERROR: Something went wrong")
        }
    },1000)
})
async function fifth(){
    try{
        const response=await promiseFive
        console.log(response)
    }catch(error){
        console.log(error)
    }
}

fifth()

//fetching a api using the async await (1st way)

// async function afunction(){
//     try{
//         let response=await fetch(URL)
//         const data=await response.json()
//         console.log(data)
//     }catch(error){
//         console.log(error)
//     }
// }

//fetching a api using then and catch (2nd way)
fetch(URL)
.then((response)=>{return response.json()})
.then((data)=>{console.log(data)})
.catch((error)=>{console.log(`E: ${error}`)})
// afunction()