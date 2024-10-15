const name = "Rohit"
const repoCount = 50
console.log(name+repoCount+"value");
//Backticks always use

console.log(`hello my name is ${name} and my repo is ${repoCount}`);

const gameName = new String("Rohit_Koushal")

//console.log(gameName[0]);
//console.log(gameName.__proto__);

//console.log(gameName.length);
//console.log(gameName.toUpperCase());//just give copy of gameName variable
//console.log(gameName.charAt(2));

const newString = gameName.substring(0,4)
console.log(newString);


const anotherString = gameName.slice(-12,5)
console.log(anotherString);


const url="https:..hitesh.com/rohit%50koushal"
console.log(url.replace("%50","_"));//ramove %50 and add _ desh

console.log(url.includes("rohit"))

console.log(gameName.split("_"));
