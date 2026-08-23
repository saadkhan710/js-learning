function sayMyName(){
    console.log("S")
    console.log("A")
    console.log("A")
    console.log("D")
}

// sayMyName  Functions ka reference 

// sayMyName()  Functions ka execution

sayMyName()

function addToNumber(number1, number2){     /// func defn : number1 & number2 parameters
    console.log(number1+number2)
}

addToNumber(2,2)                            /// 2,2 argument


function multipleNumbers(number1,number2){
    return  number1 * number2 
}

const result = multipleNumbers(2,7)
console.log("Result:", result)



function isUserLoggedIn(username){
    if(!username){                              // undefined
        return console.log("Enter username")
    }
    return `${username} "is logged In`
}

console.log(isUserLoggedIn())        // Inerview Questions if no value is passed in arug 

// undefined is logged in


function addtoCart(...num){
    return num
}

console.log(addtoCart(200,240,555,2000,5000))


function addtoCart(value1, value2, ...num){       /// interview Qs what's in num
    return num
}

console.log(addtoCart(200,240,555,2000,5000))



// accessing obj via function 

const user = {
    name : "Saad", 
    age : 27 
}

function handleObject(anyObj){
    console.log(`Hi i am ${anyObj.name} my age is ${anyObj.age}`);
     
}

handleObject({
    name : "Rocky",
    age : 23
})


const newArray = [100,200,300]

function getArray(newArray_p){
    return newArray_p[0]
}

console.log(getArray(newArray))

//++++++++++++++++++ Two way of writing function ++++++++++++

function addOne(num){
    return num + 1
}

console.log(addOne(2))


const addTwo = function(num1){
    return num1 + 1 
}

console.log(addTwo(999))


