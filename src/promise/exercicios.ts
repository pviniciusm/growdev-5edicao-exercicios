// Exercicio 1
let promise1 = new Promise((resolve) => resolve(3));
promise1.then((valor: any) => console.log(`Resolvido: ${valor}`));

// Exercicio 2
let promise2 = new Promise((resolve, reject) => reject("oi"));
promise2.catch((err: string) => console.log(`Rejeitado: ${err}`));

// Exercicio 3
function myPromise(itShouldResolve: boolean) {
    return new Promise((resolve, reject) => {
        if (itShouldResolve) {
            resolve(true);
        } else {
            reject();
        }
    });
}

function executeMyPromise(value: boolean) {
    myPromise(value)
        .then((value: any) => console.log("Resolveu: " + value))
        .catch(() => console.log("É false"));
}

setTimeout(() => {
    executeMyPromise(true);
    executeMyPromise(false);
}, 1000);

function soma(a: number, b: number) {
    return new Promise((resolve, reject) => {
        const soma = a + b;
        if (soma % 2 == 0) {
            resolve(soma);
        } else {
            reject(soma);
        }
    });
}

function executeSoma(a: number, b: number) {
    soma(a, b)
        .then((value: any) =>
            console.log(`A soma de ${a} e ${b} é par: ${value}`)
        )
        .catch((value: any) => console.log(`Erro, ${value} é ímpar`));
}

setTimeout(() => {
    executeSoma(10, 10);
    executeSoma(10, 11);
}, 2000);
