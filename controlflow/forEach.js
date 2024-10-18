//forEach loop
const codin=["js","ruby","java","Python","cpp"]

// coding.forEach(function (val){
//     console.log(val);
    
// })
// codin.forEach( (items) => {
//     console.log(items);
    
// });


// const coding = ["JavaScript", "Python", "C++", "Java"];

// coding.forEach((item) => {
//     console.log(item);
// });



// function printme(item){
//     console.log(item);
    
// }
// codin.forEach(printme)


//we can access array item ,index and array list
// codin.forEach( (item,index,arr)=> {
//     console.log(item,index,arr);
    
// })




const myCoding=[
    {
        languageName:"javascript",
        LanguageFile:"js"
    },
    {
        languageName:"python",
        LanguageFile:"py"   
    },
    {
        languageName:"java",
        LanguageFile:"java"
    },
]

myCoding.forEach( (item)=> {
    console.log(item.languageName);
    
})
