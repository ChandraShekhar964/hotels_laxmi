// console.log("my name is shekhar")
// function add(a,b){
//     return a+b;
// }

// var add=function(a,b){
//     return a+b;
// }


// var add=(a,b)=>{return a+b}
// var result=add(5,745)
// console.log(result)

// var fs=require('fs');
// // fs is file system module used to store and access the data
// var os=require('os');
// // The os module in Node. js provides operating system-related utility methods and properties. It helps retrieve system information such as CPU details, memory usage, and network interfaces, enabling you to write system-aware applications
// var user=os.userInfo();
// console.log(user);
// console.log(user.username);

// // if we want to create a file then
// fs.appendFile('Greeting.txt' , 'Hi ' +user.username+'\n',()=>{
//     console.log('file is created');
//     // basically in this we are using inline function because it need callback function 
// })

// how to import files 
const notes=require('./notes.js');
console.log("server file is available");

var age=notes.age;
var result=notes.addnumber(age+18,10);
console.log("result of the two number is "+result);
console.log(age);


var _=require('lodash');
// if can use any variable at the place of _ like x, y, anything u want to name the variable (assume that u take variable name as x)
// Lodash provides a collection of functions to help with common programming tasks, such as working with arrays, objects, strings, and numbers
// it deal with array ,object 

var data=["person","person",1,2,4,2,1,2,1,"naem","age"];
var filter=_.uniq(data);
// if u take the name of variable as x  then 
// var filter=x.uniq(data);
console.log(filter);



 