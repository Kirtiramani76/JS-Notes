// Function in JS
// Function declaration
function abc(){
    console.log('Function');
}
// Function call
abc();
// Hoisting can be done only in Function declaration;

// Function assignmemt
let assign = function ass(){
    console.log('Function Assignment');
}
assign();
let assign1=assign;
assign1();
// Named Fumction assignment-
let named=function name(){
console.log('Named Function assignment');
}
named();
// Anonymous Function assignment
let ano=function(){
    console.log('Anonymous Function assignment');
}
ano(); 

function sum(a,b){
    return a+b;
}
console.log(sum(1,2));
console.log(sum(1));
console.log(sum());
console.log(sum(1,2,3,4.5));

// Arguments in JS
function diff(c,d){
    console.log(arguments);
    return c-d;
}
let res=diff(12,11,5,7,3);
console.log(res);

function sum(a,b){
    let total=0;
    for(let val of arguments)
    total=total+val;
return total;
}
let result=sum(10,20,30,40,50);
console.log(result);

// Rest opeartor
function sum(...args){
    console.log(args);
}
sum(1,2,3,4,5);

function rest(key,val,...arg){
    console.log(arg);
}
rest(1,2,3,4,5,6);

// Default parameter
function rect(l,b=12){
    return l*b;
}
console.log(rect(10,13));

let person={
    fName:'Kirti',
    lName:'Ramani'
};
console.log(person);
    
function fullName(){
    return `${person.fName} ${person.lName}`;
}
console.log(fullName());

// GETTER SETTER
// getter: access the properties
// setter: change or mutate the properties
let person1={
    first:'Muskan',
    last:'Ramani',
    get fullName() {
     return `${person1.first} ${person1.last}`
},
set fullName(val){
    let parts=val.split(' ');
    this.first=parts[0];
    this.last=parts[1];
}};
console.log(person1.fullName);
person1.fullName='Sneha Hirwani';
console.log(person1.fullName);

// Try and Catch : Error Handling
try{
person1.fullName=76;
}
catch(e){
    alert("Error occured");
}

