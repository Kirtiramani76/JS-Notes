 console.log('JS Basic knowledge');
 
// 'var' can be used to initialize the same value and variable where 'let' used to initialize different keywords.
 if(true)
 {
 var a=5;
 var a=5;
     console.log(a);
 }
 
// increment and decrement;
 let a=5;
 let b=10;
 console.log((++a)*(--b));
 console.log((a++)*(--b));
 console.log((a++)*(b--));
 console.log((++a)*(b--));

 // ternaery operator;
 let age=25;
 let statusVote=(age>=18)?'You are eligible for vote':'Not eligible for vote';
 console.log(statusVote);

 // switch case statement;
 let num=5;
 switch(num){
     case 1:console.log('a');
     break;
     case 2:console.log('b');
     break;
     case 3:console.log('c');
  break;
default:console.log('d');
 }