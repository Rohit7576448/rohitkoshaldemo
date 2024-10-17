function sayMyName(){
    console.log("R");
    console.log("O");
    console.log("H");
    console.log("I");
    console.log("T");


    
}

// sayMyName();


function addSum(num1,num2){
    console.log(num1+num2);
    
}

// addSum(6,8);

function loginUserMessage(username="Rohit"){//default value rohit =>if we does not pass the argument in the function
    if(username===undefined){
        console.log("Please enter the username");
        return
    }
    return `${username} just logged in`
}

const result=loginUserMessage()
//console.log(result);//if value does not pass in arguments then the result show undefined



function calculateCartPrice(...num1){//this 3 dot is called rest operator and spring operator.//its give an Array
return num1
}

// console.log(calculateCartPrice(200,400,500));

const user={
    name:"Rohit",
    price:999
}
function handleObject(anyObject){//access any object within in a function
//console.log(`user name is ${anyObject.name} and price is ${anyObject.price}`);//this is the method to access the object in fucntion method

}
//handleObject(user);//this is the 1st method to access 
handleObject({//this is the second method to access from function parameters
    name:"Koushal",
    price:799
})



//declare array
 const myNewArray=[400,500,600,700,800,900]

 function mysecondValue(getArray){//this is the method to access value from Array in function
    return getArray[3]
 }

console.log(mysecondValue(myNewArray));

console.log(mysecondValue([400,500,600,700,800,900]));



