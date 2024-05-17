// adding 100 para
const t1=performance.now();
for(let i=1;i<=100;i++){
    let para=document.createElement('p');
    para.textContent='This is my new para' +i;
    document.body.appendChild(para);
}
const t2=performance.now();
console.log("Time taken" +(t2-t1) +"ms");

// optimizing a code
const t3=performance.now();
let myDiv=document.createElement('div');
for(let i=1;i<100;i++){
    let para=document.createElement('p');
    para.textContent='This is my new para' +i;
    myDiv.appendChild(para);
}
document.body.appendChild(myDiv);
const t4=performance.now();
console.log(t4-t3);

// fragment:Reflow and Repaint;
let fragment = document.createDocumentFragment();
for(let i=1;i<100;i++){
    let para=document.createElement('p');
    para.textContent='This is my new para' +i;
    fragment.appendChild(para);
}
document.body.appendChild(fragment); // 1 Reflow, 1 Repaint

// setTimeOut 
setTimeout(function(){
    console.log('Will appears after 2s')
},2000);


