// let a = {
//     name: "BMW",
//     cost: 75.6,
//     milege: 8.6,


//     start: function () {
//         console.log("car is staring ");
//     },

//     stop: function () {
//         console.log("car is stopping");
//     }



// };
// console.log(a.name)
// a.start();

// let student = {
//     name: "md ajad",
//     grade: "A+",
//     age: 23,
//     coding: function () {
//         console.log("ajad loves to coding on java language");
//     }

// };
// console.log(student.name);
// student.coding();


// let c1 = {
//     name: "BMw",
//     cost: "74.6",
//     milege: 8.8
// };
// console.log(c1.name);

// let c2;
// c2 = c1;
// c2.name = "audi";
// console.log(c1.name);


// let c1 = {
//     name: "BMW",
//     cost: 75.6,
//     milege: 8.9
// };

// let exmp = function exmp(car) {
//     return car;
// }

// console.log(exmp(c1));


// function exmp() {


//     let c1 = {
//         name: "BMW",
//         cost: 75.6,
//         milege: 8.9
//     };
//     return c1;
// }
// console.log(exmp());


// function add(a, b) {
//     console.log(a + b);
// }
// console.log(add.name);
// console.log(add.length);


// function add(a, b) {
//     console.log(a + b);
// }
// add(10, 20);

// let add1 = add;
// add1(100, 200);


// function exmp(ad) {
//     ad(100, 200);
//     console.log(ad.name);
// }
// function add(a, b) {
//     console.log(a + b);
// }
// exmp(add);




// Scope Chaining


// let userName = "ajad";
// let userRole = "Admin";

// function checkAccess() {
//     let hasAccess = false;

//     if (userRole === "Admin") {
//         let Welcome = `${userName} you have admin privaliged`;
//         hasAccess = true;
//         console.log(Welcome);
//     }

//     console.log("has accessed:" + hasAccess);
// }
// checkAccess();


// let firstName = "ajad";

// function outerFunction() {
//     let outerVar = "From outerFunction";
//     innerFunction();

//     function innerFunction() {
//         let innerVar = "From innerFunction";
//         console.log(outerVar);
//         console.log(innerVar);
//         console.log(firstName);
//     }
// }
// outerFunction();

