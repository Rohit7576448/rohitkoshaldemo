//primitive

//7 types : String, Number, Boolean, null, undefined, Symbol, BigInt


// Non-primitive/Reference :Array, Objects, Function



const id=Symbol("123")
const anotherId=Symbol("123")
console.log(id==anotherId);


const heros =["Shaktiman" , "Naagraj", "Durga"]
let MyObj = {
    name="rohit",
    age="22"
}


const MyFunction = function(){
    console.log("hello world");
    
}