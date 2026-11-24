// console.log("Hello, World!");
//variables[let-block scope,const-block scoped,var-Does not have that issue]

var fname = "John";
console.log(typeof(fname));//shows the datatype of the variable

let lname="Mathew";
console.log(lname);

const age=30;
console.log(typeof(age));

// age=35; //This will throw an error because age is a constant
{
    var fname = "Jane";
    console.log(fname);
    let lname="Doe";
    console.log(lname);
}

//Datatypes->primitive datatypes(string,number,boolean,null,undefined)

let ifName=true;
console.log(typeof(ifName));

//undefined
let address;
console.log(address);

//null
let location=null;
console.log(location);
console.log(typeof(location));//null is an object

// let ifName=true
let str="My name is nivee";
let str2="Javascript";
console.log(str.length);
console.log(str.indexOf("nivee"));
console.log(str.toUpperCase());
console.log(str.split(" "));
console.log(str.substring(3, 11));
console.log("This class is based on "+str2+ " and there are 5 primitive datatypes");


//ECMAScript 6---Template literals
console.log(`This class is based on ${str2}`);

//arithmetic operaters
//postfix increment
let a=1;
let b=a++;
 console.log(a);
 console.log(b);

//comparison operators
 let x=10;
 let y='10';
 //console.log(x===y); 
 console.log(x===y);

 //Assignment operators(Assignment:==, Addition assignment:+=(a+=3--->a=a+3),sub,mul,div)
 //Logical (||.&&)
 //Bitwise
 //Precedence
 let num1=1;
 let num2=3;
 let num3=4;
 console.log(num1/num2*num3);
