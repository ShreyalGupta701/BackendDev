console.log("hello world");
// console.log(window);
// making a file work by calling a function through another file 

// method1
// const hello1=require ('./hello1');
// console.log(hello1.add(5,10));

// method2
const {add,sub,div,mod,exponent,max}=require ('./hello1');
console.log(add(5,10));
console.log(sub(5,10));
console.log(div(50,5));
console.log(mod(50,5));
console.log(exponent(50,5));
console.log(max(50,5));