// let a = true;
// console.log(typeof a);
// let b = String(a);
// console.log(b);
// console.log(typeof b);


// let a = " 12 3ajad";
// let b = Number(a);
// console.log(typeof b);
// console.log(b)


// Comparision operator


// let userName = "ajad";
// let enterName = "ajad";
// console.log(userName == enterName);

// console.log(true === 1);

// console.log(null == undefined);
// console.log(null === undefined);

// console.log('' == 0);
// console.log('' === 0);


// console.log(NaN == NaN);
// console.log(NaN === NaN);


// console.log('010' == 10);
// console.log('001' == 1);


// if (true == true) {
//     console.log("hello world");
// }



// let age = 70;

// if (age <= 12) {
//     console.log("child ticket is issued");
// }
// else if (age >= 65) {
//     console.log("senior ticket should be issued");
// }
// else {
//     console.log("adult ticket is issued");
// }


// Switch statement

// let userRole = "admin";

// switch (userRole) {
//     case "admin":
//         console.log("admin crediential is used");
//         break;
//     case "editor":
//         console.log("editor crediential is issued ");
//         break;

//     default:
//         console.log("student acces is issued");
// }


// for (let i = 0; i < 5; i++) {
//     console.log("*")
// }
// let i = 1;
// while (i == 1) {
//     console.log("*");
//     i++;
// }

// do {
//     console.log("*");
//     i++;

// } while (i == 2);



// let row;
// row = "";



// for (let i = 1; i <= 5; i++) {
//     row = row + "*";
//     // console.log(row)
// }
// for (let j = 1; j <= 5; j++) {
//     console.log(row);


// }

// let i;
// let j;
// for (i = 1; i <= 5; i++) {

//     row = "";
//     for (j = 1; j <= 5; j++) {


//         if (i == 1 || i == 5 || j == 1 || j == 5) {
//             row = row + "*";
//         }
//         else {
//             row = row + " ";
//         }

//     }

//     console.log(row);

// }

// output
// *****
// *   *
// *   *
// *   *
// *****


// let i;
// let j;
// let n = 21;
// for (i = 1; i <= n; i++) {

//     row = " ";

//     for (j = 1; j <= n; j++) {

//         if (i == 1 || j == 1 || i == n || j == n || i == j || j == Math.floor(n / 2) || i == Math.floor(n / 2) || j == n - i || i + j == Math.floor(n / 2)

//             || i - j == Math.floor(n / 2) || i + j == n - 1 + Math.floor(n / 2)
//             || j == Math.floor(n / 2) + i
//         ) {
//             row = row + "*";
//         }
//         else {
//             row = row + " ";
//         }
//     }
//     console.log(row);
// }


// output for above program is

// *********************
//  **     * * *      * *
//  * *   *  *  *    *  *
//  *  * *   *   *  *   *
//  *   *    *    **    *
//  *  * *   *    **    *
//  * *   *  *   *  *   *
//  **     * *  *    *  *
//  *       ** *      * *
//  *********************
//  *        **       * *
//  **      ** *     *  *
//  * *    * *  *   *   *
//  *  *  *  *   * *    *
//  *   **   *    *     *
//  *   **   *   * *    *
//  *  *  *  *  *   *   *
//  * *    * * *     *  *
//  **      ***       * *
//  *        *         **
//  *********************



// Functions

// four types of Functions are

// 1> no input, no  output return

// function add() {
//     let a = 19, b = 20;

//     console.log(a + b);
// }
// add();

// 2> no input , yes output return

// let a = 12;
// let b = 22;

// function add() {
//     return a + b;
// }

// console.log(add());



// 3>accept input , no output return

// let a = 10;
// let b = 20;

// function add(a, b) {
//     let c = a + b;
//     console.log(c);

// }

// add(a, b);


// 4>accept input, return outpur

// let a = 10;
// let b = 20;
// function add(a, b) {
//     return a + b;

// }
// console.log(add(a, b))
















