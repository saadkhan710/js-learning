// Singleton 

const tinderUSer = new Object()   // Singelton Object exactly same 

tinderUSer.id = "123abc"
tinderUSer.name = "Sammy"
tinderUSer.isLoggedIn = false 

// console.log(tinderUSer)



const regularUSer = {
    email : "some@gmail.com",
    fullname : {
        userfullname :{
            firstname:"hitest",
            lastname:"choudary"
        }
    }
}

console.log(regularUSer.fullname.userfullname.lastname);

const obj1 = { 1:"a", 2:"b"}
const obj2 = { 3:"c", 4:"d"}

const obj3 = Object.assign({}, obj1,obj2)     // {target {}, source }
// console.log(obj3)


const obj4 = {...obj1, ...obj2}     // other way to do same thing : easy 
console.log(obj4)

// accessing the data from Database : sample 

const arr =[
    {
        id : "1",
        name : "Saad"
    },
    {
        id : "2",
        name : "Neha"
    }
]

console.log(arr[0].id)

console.log(tinderUSer);

console.log(Object.keys(tinderUSer))  // Returns keys of objects : In Array [ 'id', 'name', 'isLoggedIn' ]

console.log(Object.values(tinderUSer))  // Returns values of objects : In Array

console.log(tinderUSer.hasOwnProperty("name"))  // check if object has that Key

const course = {
    coursename : "js in hindi", 
    price : 999,
    courseinstructor : "hitesh"
}

console.log(course.courseinstructor)

const {coursename:cs} = course  // ease of printing syntax : De- structure  const {} = Object 

console.log(cs)

