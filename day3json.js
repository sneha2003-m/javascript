//json format
//diff btwn object &JSON is JSON give propert have""
let person={
    "name":"john",
    "age" :"30",
    "city":"newyork"
   
}
//covert object to JSON
let jsondata=JSON.stringify(person);
console.log(jsondata);

//convert json to objet
let obj=JSON.parse(jsondata);
console.log(obj);

//conditional statements
let age=20;
let gender= "female";
if(age>18){
    console.log('the person is adult and age is above 18');
}
else if(age==18){
    console.log('the person is adult and age is 18');
}
else{
    console.log('the person is minor');
}
//multiple condition statement

if (age>18 && gender=='male'){
    console.log('the person is adult and a male');
} else if(age>18 && gender=='female'){
    console.log('the person is adult and a female');
}else{
    console.log('the person is minor');
}

let animal="dog";
let ages =8;
let hight=20;
if(ages<5 || hight==20){
    console.log('print puppy');
}
else {
  console.log('dog');
}

//booleyan
let agree=true;
if(agree){
    console.log("go ahad with descion");
}
else{
    console.log('reconsider the descion');
}
//ternary operators
(agree)? console.log('i agree'):log('i diagree');
//control statement
//for loop...print number 1 to 10
for(let i=0;i<10;i++){
    console.log(i+1);
}
//for of loop
let fruit=['grapes','pear','pinaple']
let str='javascript'
for(let item of str)
{
    console.log(item);
}
//for in loop
for(let key in person){
    console.log(person[key]);
}
//while loop
let ind=0;
while(ind<10){
    console.log(ind+1);
    ind++;
}
//do while loop
let count = 1;

do {
  console.log(count);
  count++;
} while (count <= 3);
