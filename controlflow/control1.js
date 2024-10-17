const userLoggedIn=true
const debiCard=true
const loggedInFromGoogle=false
const loggedInFromEmail=true
if(userLoggedIn && debiCard){
    console.log("Allow to buy courses");
    
}

if(loggedInFromGoogle || loggedInFromEmail){
    console.log("User logged in");
    
}
