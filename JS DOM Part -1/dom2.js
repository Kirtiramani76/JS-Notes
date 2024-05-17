// in CONSOLE
// Adding or Creating element
let a = document.querySelector('id/className');
a;
// creating element
let p = document.createElement('p');
console.log(p);
// adding element
a.appendChild(p);
a;

// Creating text node
let b =document.querySelector('id/className');
b;
// creating element
let p1 =document.createElement('p');
p1.textContent = "Adding Text";
a.appendChild(p1);
a;
// inserting text by your own position:beforeBegin,afterBegin,beforeEnd,afterEnd;
let c = document.querySelector('id/className');
console.log(c);
let heading = document.createElement('h2');
heading.textContent = "Adding Text for a heading";
a.appendChild(heading);
a.insertAdjacentElement('afterBegin',heading);
c;

// Removing element
syntax- parent.removeChild(child);

