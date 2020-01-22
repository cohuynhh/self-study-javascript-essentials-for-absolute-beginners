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
        if(number > 9000000)
            reject({"error" : "Number too large!"});
        else
            setTimeout(() => resolve(isPrime(number)), 0);
    });
}

// isPrimePromised(9999).then(r => console.log(r)).catch(e => console.log(`Some thing went wrong: ${JSON.stringify(e)}`));

function testPromise() {
    console.log("-- 1st test promise--");
    isPrimePromised(23782378467).then(console.log).catch(console.error);
    console.log("-- 2nd test promise--");
    isPrimePromised(2323434).then(console.log).catch(console.error);
    console.log("-- 3rd test promise--");
    isPrimePromised(55656656).then(console.log).catch(console.error);
    console.log("-- Final test promise--");
    isPrimePromised(1223233).then(console.log).catch(console.error);
}

testPromise();