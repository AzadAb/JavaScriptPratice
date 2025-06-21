// let a = ["rohit", "ajad", 2, 3, "name:ajad"];

// console.log(a)


// let a = new Array(5);
// a[0] = 10;
// a[1] = 20;
// a[2] = 30;
// a[3] = 40;
// a[4] = 50;
// console.log(a);
// let b = a.splice(1, 3, 1, 2, 3, 4);
// console.log(b);
// console.log(a)






// for (let i = 0; i < a.length; i++) {
//     a[i] = prompt("enter the name");
// }


// let a = [10, 20, 30, 40, 30];
// console.log(a.indexOf(80));
// console.log(a.indexOf(20));
// console.log(a.includes(40));
// console.log(a.includes(23));

// console.log(a.indexOf(30));

// console.log(a.lastIndexOf(30));


// Arrays method with callback

// let numbers = [1, 4, 9, 16];
// console.log(numbers);
// let result = numbers.map(x =>
//     Math.sqrt(x)
// );




// // function squareRoot(x) {
// //     return Math.sqrt(x);
// // }
// console.log(result);


// Filter()

// let ages = [32, 15, 19, 12];
// console.log(ages);
// let update = ages.filter(x => x < 18 ? true : false

// );
// console.log(update)



// // Reduce()

// let numbers = [1, 4, 9, 16];
// let result = numbers.reduce((sum, x) => sum + x);
// console.log(result);


// // some and every and find and findIndex() and sort()

// let number = [1, 3, 4];


// Map()

// let numbers = [1, 4, 9, 16];

// const result = numbers.filter((e) => {
//     return e > 10;
// });


// console.log(result)



// let numbers = [1, 2, 3, 4];
// const result = numbers.reduce((sum, e) => {
//     return sum + e;
// })
// console.log(result)



// const cart = [
//     { item: "book", price: 120 },
//     { item: "pen", price: 20 },
//     { item: "NoteBook", price: 60 }
// ];

// const total = cart.reduce((sum, product) => {
//     return sum + product.price;
// }, 0)

// console.log(total);


// some()

// let score = [85, 72, 90, 67];

// let result = score.some((x) => x > 100);
// console.log(result)


// let students = [
//     { name: "Azad", marks: 85 },
//     { name: "Ravi", marks: 35 },
//     { name: "Meena", marks: 45 }
// ];
// const isfialed = students.some((e) => {
//     return e.marks < 40;
// })
// if (isfialed) {
//     console.log("the student is falied Because: ");
//     for (let s of students) {
//         if (s.marks < 40) {
//             console.log(` student got only marks of ${s.marks} It is less than pass mark of ${40 - s.marks}`);
//         }
//     }
// }

// let a = [10, 40, 260, 12];
// a.sort((a, b) => b - a);
// console.log(a)

