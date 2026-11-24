//arraays
let array=[1,2,3,4,5,'red','blue','green'];
console.log(array);
console.log(array.length);
console.log(array[2]);
//add at last
array.push('yellow');
console.log(array);
//delet at last
array.pop();
console.log(array);
//add to first
array.unshift('purple');
console.log(array);
//delet from first
array.shift();
console.log(array);

//slice
let array2=array.slice(2,5);
console.log(array2);
//splice
array.splice(2,3,'orange','pink');
console.log(array);

//object 1st way
let person={
    fist:'maya',
    age:24,
    place:'kochi'
}
console.log(person['age']);

let animal={
    dog:'pinky',
    age:8,
    gender:'female'
}
console.log(animal);
console.log(animal['dog']);

//2nd way of definning object
let human=new Object();
human.fsname='sneha';
human.age='23';
console.log(human);
//claas
class car{
    constructor(brand,model,year){
    this.brand=brand;
    this.model=model;
    this.year=year;
}
}
let obj_car= new car('BMW','XS',2020);
console.log(obj_car);
let obj_car2= new car('bense','sk',2003);
console.log(obj_car2);

//array of objectes
let students=[{firstname:'alice',age:20},{firstname:'bob',age:22}]
console.log(students);
console.log(students[1].age);
//boject under object
let personss ={
    address:{
        street:'kommady',
        city:'alappuzha',
        state:'kerala'
    }
}
console.log(personss);
//functions
//function addnum(a,b){
    //var sum=a+b;
   // console.log(`sum of two numbers is ${sum}`);
   //return sum;
//}
//var result=addnum(22,25);
//console.log(`sum of two number is ${result}`);

function mulnum(a,b){
    var mul=a*b;
   // console.log(`sum of two numbers is ${sum}`);
   return mul;
}
var result=mulnum(2,25);
console.log(`mul of two number is ${result}`);

//arrow function
let addnum=(a,b)=>{
return a+b;
}
let result1=addnum(22,45);
console.log(`sum of two number ${result1}`);

let person3={
    fsnames:'anitha',
    lsnames:'manoj',
    fullname:()=>{
        return person3.fsnames + " "+person3.lsnames;
    }
}
console.log(person3.fullname());
//forleap in pakaram forEch
//let numbers=[1,2,3,4,5];
//numbers.forEach(function(item,ind,arr3){

//})

let numbers=[1,2,3,4,5];
//item element off array second index arra3 temperrory array
numbers.forEach((item,ind,arr3)=>{
arr3[ind]=item>2;
})
console.log(numbers);

let ages=[12,15,18,20,25];
//filtering
let adult=ages.filter((age)=>{
    return age>=18;
})
console.log(adult);

//array destructuring
//let [x,y,z]=[10,20,30];
let [x,y,z]=[, ,30];
//undifined
console.log(x);
console.log(y);
console.log(z);

//arary spred operators
let arr4=[1,2,3];
let [a,b]=[...arr4,10];
//let arr5=[44,55,10];
//let arr6=[...arr4,...arr5];
console.log(a,b);
