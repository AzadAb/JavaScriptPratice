// function fun1() {
//     console.log("Inside fun1()");

//     function fun2(a) {
//         console.log("Inside fun2()");
//     }
//     return fun2;
// }
// fun1()();



// function outerFunction() {
//     let outerVar = 10;

//     function innerFunction() {
//         let innerVar = 20;
//         console.log("outerVar:", outerVar);
//         return innerVar;
//     }
//     return innerFunction;
// }

// console.log(outerFunction()());



// function createCounter() {
//     let count = 0;
//     function countFunction() {
//         count++;
//         console.log(count);
//     }
//     return countFunction;
// }

// let exmp = createCounter();
// exmp();
// exmp();
// exmp();


// function add(a, b) {
//     return a + b;
// }

// function sub(a, b) {
//     return a - b;
// }

// function mul(a, b) {
//     return a * b;
// }

// function div(a, b) {
//     return a / b;
// }

// function calc(a, b, callback) {
//     return callback(a, b);
// }

// console.log(calc(10, 20, add));


// function CircleArea(radius) {
//     return Math.PI * radius * radius;
// }
// function SquareArea(side) {
//     return side * side;
// }
// function TraingleARea(side) {
//     return (Math.sqrt(3) / 4) * side * side;
// }
// function Area(a, callback) {
//     return callback(a);
// }
// console.log(Area(10, SquareArea));