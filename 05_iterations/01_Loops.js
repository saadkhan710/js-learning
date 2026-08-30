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