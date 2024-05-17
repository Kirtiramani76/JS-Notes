// in CONSOLE
// Updating existing contentin a Web Page using JS DOM
// 4 ways- .innerHTML, .outerHTML, .textContent, .innerText ;
// Way 1: .innerHTML means all content of a given class or id will be appeared;
// get
let a = document.querySelector('id/className');
a;
a.innerHTML;
// set
a.innerHTML=' ';
// Way 2: .outerHTML means innerHTML content including its id or className;
let b = document.querySelector('id/className');
b;
b.outerHtml;
// Way 3 & 4: .textContent and .innerText are used to get/set the textual content.
let a = document.querySelector('id/className');
a.textContent;
a.innerText;

