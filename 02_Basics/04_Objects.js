// Singleton 

const tinderUSer = new Object()   // Singelton Object exactly same 
tinderUSer.id = "23abc"
tinderUSer.name = "Sam"
tinderUSer.isLoggedIN = false

console.log(tinderUSer)


const user1 = {
    email : "sam@gmail.com",
    fullname : {
        userfullname : {
            firstname:"hitesh",
            lastname:"chowk"
        }
    }
}

console.log(user1.fullname.userfullname.lastname)
