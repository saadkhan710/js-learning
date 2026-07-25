let score = "33abc" 

console.log(typeof score)
console.log(typeof (score))

let new_Score = Number(score)   // Explicit Number, String etc 

console.log(new_Score) // ----> Nan 
console.log(typeof new_Score)


// "33"    -> 33 
// "33abc" -> Nan
// True    -> 1 

// All gives number when used typeof 






let isLoggedIn = "saad"

let booleanIsLoggedIn = Boolean(isLoggedIn)

console.log(booleanIsLoggedIn)
console.log(typeof booleanIsLoggedIn)


// 1      -> True 
// "saad" -> True
// ""     -> False 