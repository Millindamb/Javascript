//Events

//Using onClick 
// document.getElementById('owl').onclick = function(){
//     alert("owl clicked")
// }

//using the addEventListener
document.querySelector('#owl').addEventListener('click',(e)=>{
        // alert("owl was clicked")
},false)//there are there parameter in the AddEventListener the action,function and the boolean true or false
// here e will provide all the Events like the size of the window size,position of the cursor at the time of the action

//the third parameter false is the default parameter
//the third parameter is know for the Event prapogation
// there are two Context of Event Prapogation
//1)Event Bubbuling(false) used mainly
//2)Event capturing(true)

// example of Event Prapogation
document.querySelector('#owl').addEventListener('click',(e)=>{
        console.log("owl was clicked")
},false)
document.querySelector('#images').addEventListener('click',(e)=>{
        // console.log("Images were Clicked")
},false)

//Case 1:false(default)
//whenever we click any images then the images event will work
//but whenever we clik the owl image then both the event will work but first owl then images from bottom to top like bubbules

//Case 2:true
//whenever we click the owl image then both the event will work but first the images then the owl form top to bottom like capturing

//use of the Stop Propogation method
// stopPropogation() is used when we do not want the propagation to happen

//type, timestamp, defaultprevented, target, toelement
//srcelement, currenttarget, clientX, clientY, screenY, altkey, ctrl.key

//preventDefault
document.querySelector('#google').addEventListener('click',(e)=>{
        e.preventDefault()//the link stop working as it is preventing the default behaviour
        // e.stopPropagation()
        console.log("google was clicked")
})


//Example
document.querySelector('#images').addEventListener('click',(e)=>{
        //1
        if(e.target.tagName==='IMG'){
                let removeIt=e.target.parentNode;
                removeIt.remove()
        }
})