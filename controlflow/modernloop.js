//for of
const arr=[1,2,3,4,5,6]
for (const num of arr) {
    //console.log(num);
    
}

const grree="Hello Worlds"
for (const i of grree) {
    //console.log(`Each char is ${grree}`);
    
}

//map
const ramu=new Map()
ramu.set('In',"India")
ramu.set('USA',"United State of America")
ramu.set('Fr',"France")
ramu.set('In',"India")//map must be allocated in unique value 
//console.log(ramu);

//for of loop
for (const [key,value] of ramu) {
    //console.log(key,':=',value);
    
}

//Object
// const myObject={
//     'game1':'NFS',
//     'game2':'PUbG'
// }
// for (const [key,value] of myObject) {
//     //console.log(key,':=',value);
    
// }

//for in loop
const myOb={
    js:'Javascript',
    cpp:'c++',
    rb:'ruby',
    swift:"swift by apple"
}
for (const key in myOb) {
    //console.log(`${key} shortcuts is for ${myOb[key]}`);
    
    }

    //array apply in for in loop

    const tin=['key','manju','may','jalwa','sanju']
    for (const key in tin) {
        console.log(key);
        
    }




