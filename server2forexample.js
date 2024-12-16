// to convert into object 
// const jsonstring ='{"name":"Shekhar","age":30, "city":"New york"}';
// const jsonObject=JSON.parse(jsonstring);
// console.log(jsonObject.name);
// console.log(jsonObject.city);

// to convert into json 
const objectToString ={
    name: "shekhar",
    age:30
};
const jsonstringified=JSON.stringify(objectToString);
console.log(jsonstringified);