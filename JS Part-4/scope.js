// Scope
{
    let a=2;
    let b=4;
    console.log(a);
}
console.log(b);

{
    var a=2;
    var b=4;
    console.log(a);
}
console.log(b);
// value will not print due to var keyword is used within function;
function abc(){
    var a=13;
}
console.log(a)

// Practice ques of Scope:
for(let i=0;i<10;i++){

}
console.log(i);

for(var i=0;i<10;i++){

}
console.log(i);

if(true){
    var a=5;
}
console.log(a);

function a(){
    const a=10;
}
function b(){
    const a=10;
}

const k=3;
function ab(){
    const k=3;
}
function bc(){
    const k=3;
}

const n=14;
function c(){
    const n=16;
}
