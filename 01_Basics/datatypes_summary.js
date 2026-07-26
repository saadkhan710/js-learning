/*

Javascript is dynamically type Language: 

Let Score = 100
Let name = "Saad"


Data Types are classified 2 types: 

Kis tar se memory mai rakha jata hai --> access kiya jata hai 

1. Primitive ( call by value : Copy is given)

7 types: String, Number, Boolean, null (empty), undefined, Symbol, BigInt

typeof(null) -> Object

2. Non Primitive / reference type (call by ref: Address is given)

Array, Objects, Functions : Return type Function Object /  Object 


*/


const heros = ["Shaktiman","Doga","naaraj"]

let myObj = {
    name : "Saad",      // Object is always in {} & Key Value pair
    age : "22"
}

const myFunction = function(){
    console.log("Hello W")
}

/*

Stack memory (we get copy): Primitive



Heap memory (we get Address): Non Primitive 


*/

let username = "saad"

let username2 = username

username2 = "paad"

console.log(username2)
console.log(username)




let userOne = {
    email : "saadzz.khan@gmail.com",
    upi   : "user@ybl"
}

let userTwo = userOne

userTwo.upi = "user2@ybl.com"

console.log(userOne.upi)   // same putput for both user2@ybl.com
console.log(userTwo.upi)

