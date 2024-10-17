const user={
    username:"Rohit",
    price:999,
    welcomeMessage: function(){
        console.log(`${this.username},welcome to website`);//this corrent context
        console.log(this);
        
        
    }
}
// user.welcomeMessage()
//  user.username="Koushal"
//  user.welcomeMessage()
//console.log(this);


//Arrow function
const add= (num1,num2) =>{//kerly braces need to return keywords
    return num1+num2
}
console.log(add(5,5));
//implicit return
const ad= (num1,num2) =>  num1+num2//does't neet write return keyword

console.log(add(5,5))


const myArray
