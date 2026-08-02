const score = 400 

console.log(score)

const balance = new Number(100)

console.log(balance.toString())
console.log(balance.toFixed(2))

const otherNumber = 23.8966

console.log(otherNumber.toPrecision(3)) // 23.9

const otherNumber1 = 123.8966

console.log(otherNumber1.toPrecision(3)) // 124

const hundreds = 1000000
console.log(hundreds.toLocaleString("en-IN")) // 10,00,000


/// ************ MATHS ************

console.log(Math)

console.log(Math.abs(-4)) // convert neg value to Postive O/P = 4
console.log(Math.round(3.5))  // 4 ceil() / floor() 


console.log(Math.random())  // give any valuve 0 to 1 -> 0.307428354

console.log((Math.random() * 10 ) + 1 )  // 1- 10 

const min = 10 
const max = 20 

console.log(Math.floor(Math.random() * (max - min + 1) ) + min) // Formula to get any value in range min & max




