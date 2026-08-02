// Dates 

let myDate = new Date()
console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(myDate.toLocaleDateString())

// Create a new Date 

let myNewDate = new Date(2023,0,1)

console.log(myNewDate) // Sun Jan 01 2023

let newDate2 = new Date ("2026-01-02")

console.log(newDate2.getTime()) 
console.log(Math.floor(newDate2/1000))   // TO convert it to seconds
