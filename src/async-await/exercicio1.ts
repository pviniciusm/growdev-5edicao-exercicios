function dobraNumero(numero: number): Promise<number> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(numero * 2);
        }, 2000);
    });
}

async function somaAsync(x: number) {
    const a: number = await dobraNumero(x);
    console.log(`a: ${a}`);
    const b: number = await dobraNumero(a);
    console.log(`b: ${b}`);
    const c: number = await dobraNumero(b);
    console.log(`c: ${c}`);

    return c;
}

console.log(somaAsync(10));

somaAsync(10).then((value: any) => {
    console.log("Final value: " + value);
});
