let rectangle={
    length:25,
    breadth:45
 };
 // for-in loop
for(let key in rectangle)
// key are reflected through key variables;
// value are reflected through rectangle[key];
console.log(key,rectangle[key]);

// for-of loop
for(let key of Object.entries(rectangle))
console.log(key);