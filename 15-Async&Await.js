function isPrime(number) {
    for (let i = 2; i < number; i++) {
        if (number % i === 0 && number !== i) {
            return {
                "isPrime": false,
                "elementDivisible": i
            };
        }
    }

    return {
        "isPrime": true
    };
}

function isPrimePromised(number) {
    return new Promise((resolve, reject) => {
        if (number > 9000000)
            reject({ "error": "Number too large!" });
        else
            setTimeout(() => resolve(isPrime(number)), 0);
    });
}

async function testAsync() {
    
    console.log("-- 2nd test async--");
    const r2 = await isPrimePromised(2323434).catch(console.error);
    console.log(JSON.stringify(r2));

    console.log("-- 3rd test async--");
    const r3 = await isPrimePromised(55656656).catch(console.error);
    console.log(JSON.stringify(r3));

    console.log("-- Final test async--");
    const r4 = await isPrimePromised(1223233).catch(console.error);
    console.log(JSON.stringify(r4));

    console.log("-- 1st test async--");
    const r1 = await isPrimePromised(23782378467).catch(console.error);
    console.log(JSON.stringify(r1));
}

testAsync();