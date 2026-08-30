if(2=="2"){
  console.log("Executed")   // run
}

// use strict equal it compare === it compares data type as well 

if(2==="2"){
    console.log("Executed")  // Won't run 
}


if(true) console.log("hiiiii");    // Short hand code 


const balance = 1000

if(balance < 500){
    console.log("Balance less tha 500")
}else if(balance < 750){
    console.log("Balance less tha 500")
}else if(balance < 800){
    console.log("Balance less tha 800")
}else{
    console.log("Balance is greater than 800")
}


const userloggenIn = true 
const Debit_Card = true 

if(userloggenIn && Debit_Card){
    console.log("Allow Purchase")
}

const month = 3

switch (month) {
    case 1:
        console.log("Jan")
        break;
    case 2:
        console.log("Feb")
        break;
    case 3:
        console.log("Mar")
        break;

    default:
        console.log("Default case")
        break;
}

// false values : false, 0,-0,"", BigInt 0n, null , undefined, Nan    - Interview Questions 

// Truthy value : True, "False", "0","-0"," ",[],{},function(){}

// HOw to check array if its empty 

useremail = []

if(useremail.length === 0){
    console.log("Array is empty")
}

// How to check obj if its empty 

const myobj = {
  
}

if(Object.keys(myobj).length==0){
    console.log("Object is empty ")
}

// Nullish Coalescing Operator (??) for null, underfined : Whole idea to not to break code keep it running

let var1 = undefined ?? 10  // we use this in case we don't know what value will be coming  to prevent it from null or undefined

console.log(var1)


// In real world scenrio its not 10 but Complex function ()-> run fetch data from database

// Terniary Oeprator 

const icecream_price = 100 

icecream_price<=80 ? console.log("Icecream price is less than 80"):console.log("greater than 80")

// cond ? (true-> print): (false-> print)

