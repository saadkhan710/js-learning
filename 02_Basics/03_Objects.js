/*2 Tyes of Objects : Singleton & litrals 

singleton : aapne tarah ka ek Object  ( define Constructor )

( both are same only diff : singleton)  */

// Object Literals


const mySym = Symbol("key1")

const Juser = {
    name : "Hitesh",
    age : 18,
    [mySym]:"key1",                            // Interview Q
    address : "hitesh@gmail.com",
    isloggedin : false,
    lastLoginDays : ['Monday','Saturday']

}

console.log(Juser.name)
console.log(Juser["name"])
console.log(Juser[mySym])

Juser.age = 22

console.log(Juser)

// Object.freeze(Juser)  // can't change value
Juser.age = 99


console.log(Juser)

Juser.greeting = function(){
    console.log("Hieeee")
}

Juser.greeting2 = function(){
    console.log(`Hiee is ${this.name}`)  // refering to this Object
}

console.log(Juser.greeting)
console.log(Juser.greeting2())








