// various ways to write the functions


// 1>Expression Functions
/*let a = 10;
let b = 20;

const add = function (a, b) {
    return a + b;
}
// console.log(add(a, b)) */


//2> Arrow functino

// let add = (a, b) => {
//     return a + b;
// }
// console.log(add(100, 200));



// 3>Immediately invovked function expression

/*(function () {
    console.log("I run when immediately called");
}())
*/


// Hoisting



// console.log(a);
// var a = 100;
// console.log(a);

// let a;
// console.log(a);


// console.log(a);
// var a = 100;
// console.log(a);

// let a;
// console.log(a);
// a = 100;
// console.log(a);


// greet();
// function greet() {
//     console.log("hello world");
// }




// types of Scopes in js

// 1>Global Scope

// var a = 100;
// console.log(a);

// function fun() {
//     console.log(a);
// }

// fun();



// 2>Function Scope

// function fun() {
//     var a = 100;
//     console.log(a);
// }
// fun();
// console.log(a);


// Block Scope

// let a = 100;

// if (a > 10) {
//     var b = a + 10;
//     console.log(`final value is ${b}`);

// }
// else {
//     var c = a + 10;
// }
// console.log(b);
// console.log(c);

