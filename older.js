/*const studentName=document.querySelector('#name')
const button=document.querySelector('.btn')
const list=document.querySelector('.list')

button.addEventListener('click',()=>{
    const li=document.createElement('li')
    const deleteButton=document.createElement('button')
    li.innerText=studentName.value
    deleteButton.innerText="Delete"

    deleteButton.addEventListener('click',()=>{
        list.removeChild(li)
    })
    list.appendChild(li)
    list.appendChild(deleteButton)
    studentName.value=""
}) */

   /* function print(){ //callback fn
        console.log("Hii Baccho")
    
    }

    function greet(print){ // Higher order fn
        setTimeout(()=>{ 
        console.log("Good day to you")
        print()
        },2000 )
    }

    greet(print) */


     /*function finishhomework(callback){
    console.log("Homeworking");
    setTimeout(()=>{
      console.log("Homworkdone !");  
      callback();
    
    },2000)
    }
    setTimeout(()=>{
        

        console.log(" Going to homework");

        setTimeout(()=>{
            cosole.log("Dinner Done");
            console.log("Ready to go out");

            setTimeout(()=>{
                console.log("Going to playground");
                
            },1000);// after dinner 

    },1500);//dinner time
    },2000);// homework rime

    */

// function doHomework(){
//     const p=new Promise((res,rej)=>{
//         setTimeout(()=>{
//             let done = true
//             if (done){
//                 console.log("Homework Complete");
//                 res("Homework done")
//             }
//             else{
//                 rej("Homework not done");
//             }
//         },2000)
//         });
    
//     return p;
// }

// let obj={
//     name:"Yash",
//     age:24
// }

// localStorage.setItem("obj", JSON.stringify(obj))

// localStorage.setItem("name","Yash")
// localStorage.setItem("age",24)

// console.log(localStorage.getItem("name"))
// console.log(localStorage.getItem("age"))

// console.log(JSON.parse(localStorage.getItem("obj")))
// localStorage.removeItem("age")
// localStorage.clear()//clear everything


//  sessionStorage.setItem("name","Tarun")
//  sessionStorage.setItem("age",20 )

//  console.log(sessionStorage.getItem("name"))
//  console.log(sessionStorage.getItem("age"))

//  sessionStorage.removeItem("age" )

document.cookie="name=Ankit; expires=Fri,20 Feb 2026 23:59:59 UTC;"
document.cookie="age=32; expires=Fri,20 Feb 2026 23:59:59 UTC;"

async function sample() {
    await fetch("http://127.0.0.1:5500/index.html")
    
}
sample()