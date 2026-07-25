const accountID = 1444553
let accountEmail = "saadzz.khan@gmail.com"
var accountPassword = "12345"
accountCity = "Mumbai" 

// accountID = 2 // not allowed

accountEmail = "hc@hc.com"
accountPassword = "2222"
accountCity ="Dublin"  // We are reserve memory just by giving name : Not good Practice

/*

 Prefer not to use var
 Because of issue in block scope & functional scope

*/

let accountState

console.log(accountID);
console.table([accountID,accountEmail,accountPassword,accountCity,accountState])