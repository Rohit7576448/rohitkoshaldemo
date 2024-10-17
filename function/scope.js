// let a=20//.this is global scope
// const b=50
// var c=100
 if (true){//this is block scope
    let a=20
    const b=50
    var c=100  
 }
 //console.log(a);
 //console.log(b);
 //console.log(c);

 // scope level access in function
function one(){
    const username="Rohit"
    function two(){
        const website="Youtube"
        console.log(username);
        
    }
    //console.log(website);//can't print because scope level overload
    //two()
}
one()
//interestin

addone(6)//we can declare like this when function declare directly
function addone(num){
    return num+1
}

addtwo(10)//we can't declare like this when function store in a variable is called hoisting concept
const addtwo= function(num){
    return num+2
}
//addtwo(10)



 
 
 