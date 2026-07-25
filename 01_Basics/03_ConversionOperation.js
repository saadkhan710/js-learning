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


// ************** Operations ***************

console.log("1"+ 2)        // -> 12

console.log( 1 + "2")      // -> 12 

console.log( 3 + 2 + "2")  // -> 52

let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);  
// Expected output: "x:4, y:3"    



let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"



 // In Javascript comparison >, <= and equality == check both works differently

 console.log(null > 0)   // null consider 0 in case of comparison  False
 console.log(null == 0)  
 console.log(null >= 0)  // null consider 0 in case of comparison  True

console.log(undefined == 0)  // With undefined it always gives false
console.log(undefined > 0)
console.log(undefined < 0)

// Strict Check 

console.log("2"=== 2)