// Object Clone:Iteration,Assign,Spread.

// iteration clone;
let src={a:6,b:7,c:8};
let destn={};
for(let key in src)
destn[key]=src[key];
// src.b++;
console.log(destn);

// assign clone used;
let src1={a:3,b:4,c:5};
let src2={d:7};
let destn1=Object.assign({},src1,src2);
  console.log(destn1);

// spread clone used;  
let src3={a:1,b:2,c:3};
let src4={value:6};
let destn3={...src3,src4};
// src3.a++;
console.log(destn3);