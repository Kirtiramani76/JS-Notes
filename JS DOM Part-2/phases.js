// 3phases: Capturing phase , At Target phase , Bubbling phase ;
// Capturing phase: step by step for a destination , .addEventListener('event type', function , true);
// Target phase: reached at destination
// Bubbling phase: going back to start , by default: .addEventListener('event type', function);

let content = document.addEventListener('click',function(event){
    console.log(event);
})
// Event object: used to find the specific event data
let content1=document.querySelector('#icon');
content1.addEventListener('click',function(event){
    console.log(event)
});

// // Default Action: 
// // <a href="https://www.instagram.com"> Instagram </a>
let links = document.querySelectorAll('a');
let secondLink = links[1];
secondLink.addEventListener('click',function(event){
    event.preventDefault()
    console.log('Default arises');
});

// On clicking on a particular element:
let element = document.querySelector('#wrapper');
element.addEventListener('click',function(event){
    if(event.target.nodeName =='SPAN')
    console.log('span clicked', + event.target.textContent);
});
