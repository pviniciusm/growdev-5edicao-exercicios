function job() {
    return new Promise((resolve, reject) => {
        reject();
    });
}

let promise = job();

promise
    .then(() => {
        console.log("success 1");
    })
    .then(() => {
        console.log("success 2");
    })
    .then(() => {
        console.log("success 3");
    })
    .catch(() => {
        console.log("error 1");
    })
    .then(() => {
        console.log("success 4");
    });

// Resultado:
//   error 1
//   success 4
