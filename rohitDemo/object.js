//singleton

const mySym=Symbol("key1");

//object literals
//object declare
const JsUser={
    name:"Hitesh",
    [mySym]:"key1",
    "full name":"Rohit Koushal",
    age:24,
    location:"jaipur",
    email:"rohitkoushal@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"]
}

//object access

console.log(JsUser["full name"]);
console.log(JsUser["email"]);
//update the value of email
JsUser.email="rkrohit7576448@gmai.com"
console.log(JsUser["email"]);
console.log(JsUser);


JsUser.greeting=function () {
    console.log("Hello JS user");
    
}
console.log(JsUser.greeting());


JsUser.greetingtwo=function(){
    console.log(`Hello Js user, ${this.name}`);
    
}
console.log(JsUser.greetingtwo);









