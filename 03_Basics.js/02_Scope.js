let d = 999 

if(true){
   let a = 20 
   const b = 40
   var c = 30
   let d = 50
   console.log("inner:", d) 
}

// console.log(a)
// console.log(b)
console.log(c)       // it will print 30 Interview Why we don't use var 
console.log(d) 

// Scope is different in Node & console (browser)

