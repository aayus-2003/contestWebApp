// let num = [45,1,2,3,5,6,2,22]
// for(let i = 0; i < num.length ; i++){
// console.log(num[i])
// }
//for print an array


//asynchronous programming

//like our setTiemout

// console.log("first")

// setTimeout(()=>{
// console.log("second")
// },2000)

// console.log("third")

//aaram se 3 seconds later vo print hoga
//baki bachee hua programs run honge

//syncronous programming like our promt and alert fuctions

// prompt("enter u r name")
// prompt("enter u r fathers name")
// prompt("enter u r surname")

//isme tabtak baki ka content block hoga

//like ye ek ke badd ek print honge eke ek eline se chalega

// let a = new Promise((resolve, reject)=>{
// resolve(44)
// })
// console.log(a)

// //they show an state will be fulfilled and result will be 44
// //they show in promise state

// let b = new Promise((resolve, reject)=>{
//     reject(new Error("this was an error"))
// })
// console.log(b)

// //they show an state will be rejected and result will be jo error diya hai vo

// let c = new Promise((resolve, reject)=>{
// console.log("pending")
// })

// //they show state will be pending and result will be undifined


// let d = new Promise((resolve, reject)=>{
//     setTimeout(() => {
//         resolve(55)
//     }, 2000);
// })

// console.log(d)

// //they show stareting pending state but 2 seconds later they will be show an fulfilled state and result me value bhi add kardega


// let a = new Promise((resolve, reject)=>{
//     setTimeout(() => {
//         resolve(55)
//     }, 2000);
// })

// let b = new Promise((resolve, reject)=>{
//     setTimeout(() => {
//         reject(new Error("this was an fucking error"))
//     }, 4000);
// })
// //they will be return an promise
// console.log(a , b)

// a.then((value)=>{
// console.log(value)
// })

// b.catch((error)=>{
//     console.log("this was an error" , error)
// })


              //promise channing
              
// let p = new Promise((resolve, reject)=>{
//     setTimeout(() => {
//         resolve("resolve start hua na broo")
//     }, 2000);
// })

// p.then((value)=>{
//     console.log(value)
//     return new Promise((resolve, reject)=>{
//         resolve("mangesh hai pehla")
//     })
// }).then((value)=>{
//     console.log(value)
//     return 78
// }).then((v)=>{
//     console.log(v)
// })

// const loadScript = (src)=>{
// return new Promise((resolve, reject)=>{

//     let script = document.createElement("script")
//     script.src = src
//     script.onload = ()=>{
//         resolve("your script was an loaded")
//     }
//     script.onerror = ()=>{
//         reject(new Error("mangesh ka error"))
//     }
//     document.body.appendChild(script)
// })    
// }
// let a = loadScript("")

// a.then((value)=>{
//     console.log(value)
// }).catch((error)=>{
//     console.log(error)
// })

// let a = new Promise((resolve, reject)=>{
//     setTimeout(() => {
//         resolve(45)
//     }, 2000);
// })

// let b = new Promise((resolve, reject)=>{
//     setTimeout(() => {
//         reject("error")
//     }, 3000);
// })

// let c = new Promise((resolve, reject)=>{
//     setTimeout(() => {
//         resolve(78)
//     }, 4000);
// })

// // let x = Promise.all([a, b, c])
// // let x = Promise.allSettled([a, b, c])
// // let x = Promise.race([a, b, c])
// let x = Promise.any([a, b, c])
// x.then((value)=>{
//     console.log(value)
// })

//they show an array 3 promise of resolve
//but anything any rejection hua to yee state chalegi nahi
//isliye allSettled banayi hai
//they show an error state also
//jo pehla print honee wala hai vo batayega
//khas kar resolve valuye he print hogii error value egnore karega
//but sabb error (reject) value rahi na then vo error print hoga

// let p =  new Promise((resolve,reject)=>{
// setTimeout(()=>{resolve(45)},3000)
// })
// console.log(p)
// p.then((value)=>{
//     console.log(value)
//     return new Promise((resolve, reject)=>{
//         resolve(78)
//     })
// }).then((v)=>{
//     console.log(v)
// })


// let user = prompt("enter number u wantt")
// user = Number.parseInt(user)

// for(let i = 0; i < user; i++){
//     console.log(i+1)
// }

// function loadScript (src) {
// let script = document.createElement("script")
// script.src = src
// script.onload = ()=>{
//     console.log("u r script was loaded")
// }
// script.onerror = ()=>{
//     console.log("this was an error")
// }
// document.body.appendChild(script)
// }

// loadScript("")

//js are main programming language of we devlopment
//they help for build an logic for websites
//js are brain website

let ihtml
let url = "https://kontests.net/api/v1/all"
let response = fetch(url)
response.then((value)=>{
    return value.json()
}).then((v)=>{
    console.log(v)
    ihtml = ""
    for(let key in v){
        console.log(v[key])
        ihtml += `
        <div class="card" style="width: 15rem;">
                    <img src="https://png.pngtree.com/png-clipart/20200501/ourmid/pngtree-contest-watercolor-splash-short-sentence-copywriting-png-image_2196894.jpg" class="card-img-top" alt="">
                    <div class="card-body">
                        <h5 class="card-title">${v[key].name}</h5>
                        <p class="card-text">${v[key].start_time}</p>
                        <p class="card-text">${v[key].end_time}</p>
                        <p class="card-text">${v[key].duration}</p>
                        <a href="${v[key].url}" class="btn btn-primary">Go On Link</a>
                    </div>
                </div>
            </div>
        `
        cardContainer.innerHTML = ihtml
    }
})
