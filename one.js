

/* let firstbatch=30;
let secondbatch=20;

let count=firstbatch+secondbatch
console.log(count);

let myage=22
console.log(myage)



let myage2 =22
let humandogRatio =7
let mydogage= myage2 * humandogRatio
console.log(mydogage) 

let count = 5
count =count + 4
console.log(count)

let bonuspoints = 50
bonuspoints = bonuspoints + 50
bonuspoints  = bonuspoints - 75 
bonuspoints = bonuspoints + 45
console.log(bonuspoints)  

function increment(){
    alert("the butoon was clicked")
}

function countdown(){
    console.log(1)
    console.log(2)
    console.log(3)
    console.log(4)
    console.log(5)
}
countdown()
countdown()

function doniage(){
    console.log(42)
}
doniage()

let lap1 = 34
let lap2 = 33
let lap3 = 36
function laptime(){
    let totaltime = lap1+lap2+lap3;
    console.log(totaltime)
}
laptime()  

let lapscompleted = 0
function incrementlaps(){
    lapscompleted = lapscompleted + 2 +1   
}
incrementlaps()
incrementlaps()
incrementlaps()
incrementlaps()
incrementlaps()
incrementlaps()
console.log(lapscompleted) */

let saveEl = document.getElementById("save-el")   //save entries code
let countel = document.getElementById("count-el")
let count =0 

function increment(){
 count += 1
 countel.textContent = count
}
function decrement(){
    count -= 1
    countel.textContent = count
   }

function save(){
    let countStr = count + " - " //save entries code
    saveEl.textContent += countStr  //save entries code
    countel.textContent = 0
    count = 0
}


/*let username = "dinesh"
let message = "you have three new noticification"
let messageToUser = message + ",  " +username + "!"
console.log(messageToUser)

let Name = 4
let Greeting = "43 "
let mygreeting =Name + Greeting 
console.log(mygreeting) 

console.log(4+5)
console.log("2" + "4")
console.log("5" + 1)
console.log(100 + "100") */


