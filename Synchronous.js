function task1() {
    console.log("Task1 start...");

    let start = Date.now();
    let delay = 5000;

    let end = start + delay;
    console.log("Tasks1 are started..!");

    while (Date.now() <= end) {

    }

    console.log("Tasks1 are completed..!");


}

function task2() {
    console.log("Task2 start...");

    let start = Date.now();
    let delay = 5000;

    let end = start + delay;
    console.log("Tasks2 are started..!");

    while (Date.now() <= end) {

    }

    console.log("Tasks2 are completed..!");

}
function task3() {
    console.log("Task3 start...");

    let start = Date.now();
    let delay = 5000;

    let end = start + delay;
    console.log("Tasks3 are started..!");

    while (Date.now() <= end) {

    }

    console.log("Tasks3 are completed..!");

}
task1();
task2();
task3();

function fun1() {
    console.log("Fun1 excution started");
    let start = Date.now();
    while (Date.now() - start < 3000) {

    }
    console.log("Fun1 excution completed");
}
function fun2() {
    console.log("Fun2 excution started");
    let start = Date.now();
    while (Date.now() - start < 3000) {

    }
    console.log("Fun2 excution completed");
}
function fun3() {
    console.log("Fun3 excution started");
    let start = Date.now();
    while (Date.now() - start < 3000) {

    }
    console.log("Fun3 excution completed");

}


function fun4() {
    console.log("Fun4 excution started");
    let start = Date.now();
    while (Date.now() - start < 3000) {

    }
    console.log("Fun4 excution completed");

}
fun1();

setTimeout(fun2, 5000);
setTimeout(fun3, 2000);
fun2();

// fun4();


function fun() {
    console.log("hello");
}

let intervalID = setInterval(fun, 2000);
// clearInterval(intervalID)
// console.log(intervalID)
setTimeout(() => clearInterval(intervalID), 10000)