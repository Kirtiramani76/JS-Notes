// Array in JS
 let arr=[2,5,1,9,4];
 console.log(arr);

// Insertion in Array:
//begin-unshift();
//middle-splice();
//end-push();

arr.unshift(76);
console.log(arr);
arr.splice(2,0,69,96);
console.log(arr);
arr.push(90);
console.log(arr);

// Searching in Array:(can be searched by includes and indexOf);
let arr1=[2,5,1,9,4];
console.log(arr1.indexOf(9));
console.log(arr1.indexOf(10));

if(arr1.indexOf(1)!=-1){
    console.log('Present');
}
else{
    console.log('Not Present');
}
// OR
console.log(arr1.includes(10));
// OR
console.log(arr1.indexOf(5,1));

// Array through Object-
// Array Searching using Reference Data Type : (cannot be searched by includes);
let course=[
    {no:1,name:'Kirti'},
    {no:2,name:'Muskan'}
];
console.log(course);
console.log(course.includes({no:1,name:'Kirti'}));

// call-back function
let course1=course.find(function(course)
{ 
return course.name=='Muskan';
}
)
console.log(course1);
 
// Arrow function:reduce lines of code i.e. used in call-back function
let course2=course.find(course=>course.name=='Muskan');
console.log(course2);

let course3=course.find(course=>course.name=='Rahul');
console.group(course3);

// Deletion in Array:
//begin-shift();
//middle-splice();
//end-pop();
let arr2=[76,103,82,102,77,104];
arr2.shift(76);
console.log(arr2);
arr2.splice(1,1);
console.log(arr2);
arr2.pop(104);
console.log(arr2);

// Empty Array
//Method:1
let num=[1,2,3,4,5];
num1=num;
num=[];
console.log(num);
console.log(num1);

//Method:2
let num3=[1,2,3,4,5];
num.length=0;
console.log(num3);

//Method:3
let num4=[1,2,3,4,5];
num.splice(0,num4.length);
console.log(num4);

// Combining and Slicing in Array:
// Primitive Data Type
let num1=[1,2,3,4];
let num2=[5,6,7,8];
let combine=num1.concat(num2);
console.log(combine);
combine.slice(2,3);
let slice=combine.slice(2,4);
console.log(slice);

let num=[10,20,30,40,50,60,70,80];
let slice1=num.slice(2,7);
console.log(slice1);

// Reference Data Type
let num=[{a:1,b:2,c:3}];
let num5=[{d:4,e:5,f:6}];
let combine2=num.concat(num5);
console.log(combine2);

// Spread operator:used to combine the two arrays 
let first=[1,2,3,4];
let second=[5,6,7,8];
let combine5=[...first,...second];
console.log(combine5);
// Combining an array can be done by concat or spread;

let fir=[7,6,5,4];
let sec=[3,2,1,0];
let combine6=[...fir,"K",...sec,"M",true];
console.log(combine6);
// Creating Copy of an Array
let copy=[...combine6];
console.log(copy);






