
// 2D Arrays

// let a = [[25, 30, 22], [23, 31, 24], [26, 30, 20]];
// // console.log(a[1][1]);



// let i;
// let j;

// for (let i = 0; i < a.length; i++) {
//     for (let j = 0; j < a[i].length; j++) {
//         console.log(a[i][j]);
//     }
// }


// 3D Arrays

// let a = [[[10, 15], [20, 25], [30, 35]]
//     , [[40], [50], [60]]
//     , [[70], [80], [90]]];

// for (let i = 0; i < a.length; i++) {
//     for (let j = 0; j < a[i].length; j++) {
//         for (let k = 0; k < a[i][j].length; k++) {
//             console.log(a[i][j][k]);
//         }
//     }
// }


// Shallow Copy and Deep Copy

// let a = [10, 20, 30, 40];
// let b = a;
// console.log(a);

// let a2 = [...a];
// console.log(a2);
// console.log(a == b)
// console.log(a === a2)


// let a = [10, 20];
// let b = [a, [20, 30]];
// console.log(b)

// Example of Shallow Copy

// let a1 = [[10, 20], [30, 40]];
// console.log(a1);
// let a2 = [...a1];  or let a2 = a1.slice();
// console.log(a2);
// a1[1].push(30);
// console.log(a1)
// console.log(a2);


let s = "hello";
s.concat("world");

// console.log(s)
// let s1 = new String("hello");

// console.log(s === s1)

let s2 = "hello";

console.log(s == s2);