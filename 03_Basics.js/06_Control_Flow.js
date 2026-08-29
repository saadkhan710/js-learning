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

// false values : false, 0,-0,"", BigInt 0n, null , undefined, Nan

// Truthy value : True, "False", "0","-0"," ",[],{},function(){}


