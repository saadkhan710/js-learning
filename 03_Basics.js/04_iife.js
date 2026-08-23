//  Immediately Invoking Function Expressions (IIFE)   (function)(execute);

// 1. To prevent Global scope population : such as declaration of variables
// 2. run immediately : eg Database connections as soon as application is started 



// named IIFE

(function chai(){
    console.log("DB Connected")
})();

// unamed IIFE

(()=>{                         
    console.log("DB2 Connected")
})();  

((name)=>{
    console.log(`${name} is connected`)
})("Snowflake");


