// Modern String Syntax : String inter Pollination

const name = "Saad"

const repoCount = 5

console.log(`Hello my name is ${name} and my repoCount is ${repoCount}`)



const gameName = new String('Saad-Khan-07')

console.log(gameName[0])
console.log(gameName.toLocaleLowerCase())
console.log(gameName.length)
console.log(gameName.charAt(1))

// Doen't change the original string 

const movieName = "hiteshc"
console.log(movieName.length)


const newString = movieName.substring(0,2)
console.log(newString)

const anotherString = movieName.slice(-8,5)
console.log(anotherString)

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20','-'))
console.log(url.includes('hitesh'))

console.log(gameName.split("-"))
