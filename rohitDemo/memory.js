
//stack(copy can change)
let myYoutubeName= "RohhitKoushal.com"
let mySecond=myYoutubeName
mySecond="Pujasarkar.com"
console.log(myYoutubeName);
console.log(mySecond);


//original change(heap)
let userOne={
    email:"rohitkoushal@gmai.com",
    upi: "user@ybl"

}

let userTwo= userOne
userTwo.email="KUmarRohit"
console.log(userOne.email)
console.log(userTwo.email);

