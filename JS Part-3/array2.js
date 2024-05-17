// Iterating in an Array
// for-of loop
let arr=[1,2,3,4,5];
for(let key of arr){
    console.log(key);
}
// for-each loop
  arr.forEach(function(num){
  console.log(num);
  })
// Converting above loop in an Arrow function
 arr.forEach(num=>console.log(num));

// Joining in an Array
let arr1=[2,4,6,8];
let join=arr1.join(',');
console.log(join);

// Spliting in an Array
let mssg='Spliting method are basically used in a String';
let parts= mssg.split(' ');
console.log(parts);
let joined=parts.join('-');
console.log(joined);

// Sorting in Array
// Primitive Data Type
let arr2=[2,4,3,5,1,6];
let num=arr2.sort();
console.log(num);
let num1=arr2.reverse();
console.log(num1);

// Reference Data Type
let arr3=[{id:2,name:'Muskan'},
{id:1,name:'Kirti'},
{id:3,name:'Sneha'}
];
// // localeCompare metthod to compare the "name" property of objects and sort them alphabetically.
let arrange=arr3.sort((a, b) => a.name.localeCompare(b.name));
console.log(arrange);

// Filtering in Array
let arr4=[1,5,-1,4,-6];
let filtered=arr4.filter(function(value){
return value>=0;
});
console.log(filtered);
// in Arrow function
let filtered1=arr4.filter(value => value>=0);
console.log(filtered1);

// Mapping in Array
let arr5=[76,77,82,102,103,104];
let mapping=arr5.map(function(val){
return 'student_id:' +val;
})
console.log(mapping);
 // in Arrow function
 let mapping1=arr5.map(val => 'student_id:'+val);
 console.log(mapping1);

 // Mapping with Objects
 let arr6=[2,4,-3,8,-5];
 let filtered2=arr6.filter(function(val){
return val>=0;
 });
 let mapping2=filtered2.map(function(value){
    return obj={id:value}
 });
 console.log(mapping2);
 // in Arrow function
 let filtered3=arr6.filter(val => val>=0);
 let mapping3=filtered3.map(value => obj1={id:value});
 console.log(mapping3);
//   Chaining in Array from above function
 let item=arr6
          .filter(val => val>=0)
          .map(value => obj1={id:value});
 console.log(item);

// Reducing an Array
// Sum of elements in an array
let arr7=[1,2,3,4];
let total=0;
for(let key of arr7)
total=total+key;
console.log(total);
// Method to reduce in Array
let accumulator=0;
let totalSum=arr7.reduce(function(accumulator,cuurentValue){
    return accumulator+cuurentValue
});
console.log(totalSum );
// in Arrow function
let sum=arr7.reduce((accumulator,currentValue) => accumulator+currentValue,0);
console.log('Total Sum:-');
console.log(sum);



