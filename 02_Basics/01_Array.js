// Array in JS creates Shallow Copy : Copies share same references : vice versa Deep Copy 

const myArr = [0,1,2,3,4]

const myArr2 = ["Shaktiman","bolu"]

const arr = new Array(1,2,3,4)
console.log(arr[0])

// Array Methods 

arr.push(6)
arr.push(7)
console.log(arr)

arr.pop()
console.log(arr)

console.log(arr.includes(4))
console.log(arr.indexOf(10))

const newarr = myArr.join()  // String return 0,1,2,3,4

console.log(newarr)

///  Interview Questions: Splice  Slice 

const myn1 = myArr.slice(1,3)  //  [0,1,2,3,4]
console.log('A',myArr)
console.log(myn1)

// [ 1, 2 ]         A [ 0, 1, 2, 3, 4 ] 

const myn2 = myArr.splice(1,3)  //  [0,1,2,3,4]
console.log(myn2)
console.log('B',myArr)

/// [ 1, 2, 3 ]     B [ 0, 4 ]
