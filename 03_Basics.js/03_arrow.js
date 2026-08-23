const user = {
    username : "Saad",
    age : 23,

    welcomeMessage:function(){
        console.log(`${this.username}, welcome to website`)
        console.log(this)
    }
}

user.welcomeMessage()
user.username = "Sam"
user.welcomeMessage()

console.log(this)  // {} -> Standalone node, bun, dino gives back empty, browser returns windows

// this : Current context ****Works only with Objects******

// arrow function () => {} 

const addTwo = (num1,num2) => {
    return num1 + num2
}

console.log(addTwo(2,4))

// another way of writing arrow function Implicit return => () complusory

const addThree = (num1,num2,num3) => (num1 + num2 + num3)


console.log(addThree(3,3,3))