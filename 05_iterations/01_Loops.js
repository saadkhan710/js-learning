for (let i = 0; i <= 10; i++) {
    const element = i;
    console.log(element)
    
}
/// Break & Continue 


for (let index = 1; index <= 20 ; index++) {

    if(index == 5){
        console.log(`We have detected number 5`)
        break
    }
    console.log(`Value of i is ${index}`)
    
}

// Stop after print ( We have detected number 5) , it will break the control flow 

for (let index = 1; index <= 20 ; index++) {

    if(index == 5){
        console.log(`We have detected number 5`)
        continue
    }
    console.log(`Value of i is ${index}`)
    
}

// It won't print execute "Value of i is 5"  -> EK galti maaf, skip condition for 1 time


let index = 1
while(index <= 10){
    console.log(`Index valve is ${index}`)
    index = index + 2
}

let myArray = ["Spiderman","Batman", "Ironman"]
let arr = 0 

while(arr < myArray.length){

    console.log(`myArray valve is ${myArray[arr]}`)
    arr = arr + 1
}


let score = 0
do {
    console.log(`My score is ${score}`)
    score = score + 10
} while (score <= 100);


// Array specific Loops 

// for of

const arr2 = [1,2,3,4,5]

for (const num of arr2) {
    console.log(num)
}

for (const num of myArray) {
    console.log(num)
}

// Maps : Remembers order,  Iterable: it knows how to hand put items one by one,


const map = new Map()

map.set("IN","India")
map.set("US","United States of America")
map.set("EU","Europe")
map.set("UK","United Kingdom")
map.set("IN","INDIA")

console.log(map)

for (const element of map) {
    console.log(element);      // we are getting -> [ 'IN', 'INDIA' ] Key & Value 
    
}


for (const [key,value] of map) {
    console.log(key,":-",value);      // we will destructure it  
    
}

// for of loop won't work on objects 

// TO run loop on Oject we can use for in 

// const myObj ={
//     js :"Javascript",
//     cpp: "C++",
//     py:"Python",
//     sf: "Swift",
//     sf: "Swift"
// }

// for (const key in myObj) {
//    console.log(`${key} is shortcut for ${myObj[key]}`);

// }


/// NOTE: Array also has keys it starts from 0,1,2,3..... 

/// Hence to make our own keys we have javascript has introduced Objects -- From Docs 



const arr5 = [1000,2000,3000,4000]

for (const element of arr5) {
    console.log(element);

}

for (const key in arr5) {
    console.log(key);
}



const map1 = new Map()

map1.set("IN","India")
map1.set("CH","China")
map1.set("UK","United Kingdom")


console.log(map1)

for (const element of map1) {
    console.log(element);        
    
}

for (const key in map1) {
  console.log(key);

}                                  //this won't work : reason its not iterable 


for (const [key,valve] of map1) {
  console.log(key);

} 

// array, map : for of 

// obj : for in




const myObj ={
    js :"Javascript",
    cpp: "C++",
    py:"Python",
    sf: "Swift",
    sf: "Swift"
}

// for (const key in myObj) {
//    console.log(`${key} is shortcut for ${myObj[key]}`);

// }   Works 

// for (const key of myObj) {
//     console.log(`${key} is shortcut for ${myObj[key]}`);
// }

// Dont work not iterable 


const map2 = new Map()

map2.set("IN","India")
map2.set("CH","China")
map2.set("UK","United Kingdom")


console.log(map2)

for (const element of map2) {
    console.log(element);        
    
}

// for (const key in map1) {
//   console.log(key);

// }



//  So the rule of thumb
//  Map, Set, Array, String → iterable → use for...of

//  Plain Object → NOT iterable → use for...in, or convert it first with Object.keys() / Object.values() / Object.entries() (those do return iterable arrays, which is why they work with for...of).


console.log(typeof map[Symbol.iterator]); // "function"  → it HAS the mechanism
console.log(typeof myObj[Symbol.iterator]); // "undefined" → it does NOT have it


// For Each loop 

coding = ['Java','CPP','Python','C++']

coding.forEach( function (value){
    console.log(value);
} )

coding.forEach( (item) => {

    console.log(item);
 
} )

function printme(item){
    console.log(item);  
}

coding.forEach(printme)

// 
const fruits = ["Apple","Mango","Grapes","Banana"]

const values = fruits.forEach((item)=>{
    console.log(item)
})

console.log(values);

////////

const myNums = [1,2,3,4,5,6,7,8,9,10]

const newNums = myNums.filter((nums)=> {    /// If we are using {} in arrow func we are defining scope hence we need to explicitly mentioned retun keyword
    return nums>4} )

console.log(newNums);

// Same thing can be done 

const newNum = []

myNums.forEach((num)=>{
    if (num>=5) {
        newNum.push(num)
    }
})

console.log(newNum);

/////////////// EXERCISE ////////////// 


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];


const webooks = books.filter((bk)=>(bk.publish >=1995 && bk.genre === "History"))


console.log(webooks)

//////////////////

const myNumers = [1,2,3,4,5,6,7,8,9,10]

const myNewNums = myNumers.map((num)=>num + 10)  // Map will by default return like filter

console.log(myNewNums)

/////chaining/////

const myyNum = [1,2,3,4,5,6,7,8,9,10]

const newnumm = myyNum
                .map((num)=>(num*10))
                .map((num)=>(num+1))
                .filter((num) => num >40)



console.log(newnumm);


//////////Reduce/////

const nums1 = [1,2,3]

const total = nums1.reduce((acc,Curlva)=>(acc + Curlva),0)

console.log(total);

/////////////

const shopping_Cart =[
{
    course : "JS",
    price: 2999
},
{
    course : "Py",
    price: 1999
},
{
    course : "MObile CS",
    price: 4999
},
{
    course : "Data Science",
    price: 16999
}]

const total_cart_Price = shopping_Cart.reduce((acc,item)=>acc + (item.price),0)


console.log(total_cart_Price);
