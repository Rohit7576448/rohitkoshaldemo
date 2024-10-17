//for loop
for (let index = 1; index <= 10; index++) {
    const element = index;
    if(element===5){
        console.log("5 is best Numbers");
        
    }
    //console.log(element);
}
for (let index = 1; index <=10; index++) {//table for loops
    //console.log(`Table of: ${index}`);
    
    for (let j = 1; j <=10; j++) {
       //console.log(`inner loop values is: ${j} and inner loop ${index}`);
       //console.log(index+`*`+ j+ `=`+ index*j);
       
        
    }
}

let myArray=["flash","batman","superman"]
for (let index = 0; index < myArray.length; index++) {
        console.log(myArray[index]);
 
    
}

//break amd continue

//break
for (let index = 1; index <=20; index++) {
    if(index===5){
        console.log("we found 5");
        break
        
    }
    console.log(`value of i is: ${index}`);
}




//continue
for (let index = 1; index <=20; index++) {
    if(index===5){
        console.log("we found 5");
        continue
        
    }
    console.log(`value of i is: ${index}`);
    
    
}