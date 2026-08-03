const marvel_heros = ["Hulk", "Spiderman"]

const DC_heros = ["Batman", "Superman"]


// marvel_heros.push(DC_heros)

// console.log(marvel_heros) // [ 'Hulk', 'Spiderman', [ 'Batman', 'Superman' ] ]
// console.log(marvel_heros[2][1])  // Superman


// all_heroes = marvel_heros.concat(DC_heros) // Concat returns to new array
// console.log(all_heroes)

const all_heros = [...marvel_heros, ...DC_heros]  // Spread glass drop eg

console.log(all_heros)

const another_array = [1,2,3,[4,5,],[5,6,7,[5,6]]]

const flat_another_array = another_array.flat(Infinity)
console.log(flat_another_array)



console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh"))

console.log(Array.from({name:'bat'})) //Retuns [] empty array

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3)) //[100, 200, 300    ]
