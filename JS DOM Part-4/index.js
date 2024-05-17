// fetch API
async function abc(){
    let content = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    let output = await content.json();
    console.log(output);
}
abc(); 

function course(){
    var name="Web Dev";
    function skills(){
        console.log(name);
    }
    skills();
}
course();

// closures
function outer(){
    let name="Kirti";
    function inner(){
        console.log(name);
 }
 return inner();
}
let myName=outer();
myName();