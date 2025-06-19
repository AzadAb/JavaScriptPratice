// function loadDashBoard(id, callback) {
//     let error;
//     setTimeout(() => {

//         if (error) {

//             return callback(error);
//         }
//         console.log("Geteching  user Data....");

//         setTimeout(() => {
//             if (error) {

//                 return callback(error);
//             }
//             console.log("Feteching the user friend list");

//             setTimeout(() => {
//                 error = "post fetching error";
//                 if (error) {

//                     return callback(error);
//                 }
//                 console.log("Feteching user post");

//                 setTimeout(() => {
//                     if (error) {

//                         return callback(error);
//                     }
//                     console.log("Feteching user Comments...");

//                 }, 2000);

//             }, 3000);

//         }, 2000);

//     }, 2000);
// }

// function errorHandler(error) {
//     console.log("Error has occured...");
// }

// loadDashBoard("101", errorHandler);

// let prm = new Promise((reject) => {
//     console.log("Excuted function...");
//     reject("Failure");
// });
// console.log(prm);



// let prm = new Promise((reslove, reject) => {
//     console.log("Excuted function...");
//     // reslove("Success");
//     reject("failure");
// });
// // console.log(prm);

// // prm.then((result) => {
// //     console.log(result);
// // });

// prm.catch((result) => {
//     console.log(result);
// });


// const prm = new Promise(
//     function executorFunc(resolve, reject) {

//         console.log("Water has start Boil");
//         setTimeout(() => {
//             console.log("water is boiled");
//             resolve();
//         }, 3000);


//     }
// );
// prm
//     .then((msg) => {
//         console.log("Promise fullfield", msg);
//     })
//     .catch((msg) => {
//         console.log("Promises is unfullied");
//     })


// setTimeout(() => {
//     console.log("Macro Task")
// }, 2000);


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

step1().
    then(step2).then(step3).then(() => console.log("the all function are excuted successfully"))
    .catch(() =>
        console.log("the function is rejected")
    )

