// DOM
// document object model-have a hierarchical structure of html nodes
// browser creates the dom like structure 
// DOM manipulation-access element-store to local variable-js DOM to alter it
//  DOM- access element-->by id,by classname,by tagname,custome css selector(querry name)


// byclassname -->the elements will be grouped


// Events
// actions or occurences that happens to the html elements
// keyboard events,mouse,scroll,form events

// mouse-->click,double click,mouse enter,mouse leave,onchange events,mouse in or out
// keyboard-->key press, key up-key down
// form-->submit,on focus,on blur

function show(){
    alert("Submitting....");    
}

// dynamically manipulate the dom
// when mouse over the color changes to brown
var head1=document.getElementById('head1');
head1.addEventListener('mouseover',()=>{
    head1.style.color='brown';
})

// onmouseleave can also be given as an add event listener also
function leave(){
    head1.style.color='black';
}
// or
// head1.addEventListener('mouseleave',()=>{
//     head1.style.color='green';
// })

function display(e){
    console.log(e.target.value);
}

function up(event){
    console.log(event.target.value);
}
function down(ev){
    console.log(ev.target.value);
}
function press(eve){
    console.log(eve.target.value);
}

var input3=document.getElementById('input3');
function focuses(){
    input3.style.backgroundColor='lightblue';
}
function blure(){
    input3.style.backgroundColor='white';
}

function submitt(){
    alert("Submit!");
}

// Email validation-->
// name@domain.extention(.extention(optional))
let email=document.getElementById('input7');
let error=document.getElementById('error');
let regex=/^([A-Za-z0-9\.-_#]+)@([A-Za-z0-9]+).([a-z]{2,3})(.[a-z]{2,3})?$/
function validate(){
if(regex.test(email.value)){
    error.textContent='email is invalid';
    error.style.color='green';
    return true;
}
else{
    error.textContent='email is invalid';
    error.style.color='green';
    return false;

}
}
function verify(){
        let num=document.getElementById('num');
        let errmsg = document.getElementById('errmsg');


        try {
             let x=num.value;
             if(x<5) throw 'number is too low'
             if(x>10) throw 'number is too high'


        } catch (error) {
            //console.log(`the error is ${error}`)
            errmsg.textContent=`the error is  ${error}`;
            
        }
    }