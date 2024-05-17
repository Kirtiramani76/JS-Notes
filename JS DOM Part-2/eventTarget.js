// in CONSOLE
// Event Target:is an interface(blueprint) implented  by an object used to recieve event and may have listener(respond).
// 3 Methods: .addEventListener , .removeEventListener , .dispatchEventListener ;

// Method 1: .addEventListener
// Pseudo Code: <event-target>.addEventListener(<event-to-listener-for>,<function-to-run-where-event-happened>);
// <event-target>: document,div,p,video,article;
// <event-type>:click,scroll,doubleClick;
// function:defines what to do in an event;

document.addEventListener('click', function () {
    console.log('Event Appeared')
});
OR
function eventFunction() {
    console.log('Print eventFunction');
}
document.addEventListener('click', eventFunction());

// Method 2: .removeEventListener
function eventFunction() {
    console.log('Print eventFunction');
}
document.addEventListener('click', eventFunction());
document.removeEventListener('click',eventFunction());
