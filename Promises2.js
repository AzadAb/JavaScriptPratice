// function exmp() {
//     return new Promise((resolve, reject) => {
//         // console.log("hello")
//         setTimeout(() => {
//             console.log("Task Completed");
//             resolve();
//         }, 3000);
//     })
// }
// // exmp().then(() => {
// //     console.log("Promises fulfilled");
// // })
// //     .catch(() => {
// //         console.log("promise failed");
// //     })

// async function run() {
//     await exmp();
//     console.log("Promise is fullfilled");
// }
// run();





function step1() {
    return new Promise(
        (resolve, reject) => {
            console.log("Step1 is started");
            setTimeout(() => {
                console.log("step 1 is completed")
                resolve();
            }, 4000);
        }
    )

}
function step2() {
    return new Promise(
        (resolve, reject) => {
            console.log("step2 is started");
            setTimeout(() => {
                console.log("step2 is completed");
                resolve();
            }, 2000);
        }
    )

}
function step3() {
    return new Promise((resolve, reject) => {
        console.log("step3 is started");
        setTimeout(() => {
            console.log("step3 is completed")
            resolve();
        }, 3000);
    })

}

// step1().
//     then(step2).then(step3).then(() => console.log("the all function are excuted successfully"))
//     .catch(() =>
//         console.log("the function is rejected")
//     )

// the same above code we can write using async and awit


// async function run() {
try {
    await step1();
    await step2();
    await step3();

}
catch (error) {
    console.log("promises is failed")
}
// }

// run();