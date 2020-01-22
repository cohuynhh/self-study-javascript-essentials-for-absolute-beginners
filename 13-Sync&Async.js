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

function testSync() {
    console.log("-- 1st test sync--");
    console.log(isPrime(400000003));
    console.log("-- 2nd test sync--");
    console.log(isPrime(401020003));
    console.log("-- 3rd test sync--");
    console.log(isPrime(200010101));
    console.log("-- Final test sync--");
}

//testSync();

//---------------------------------//

function isPrimeAsync(number, callback) {
    setTimeout(() => callback(isPrime(number)), 0);
    console.log("Executing function...");
}

function testAsync() {
    console.log("-- 1st test async--");
    isPrimeAsync(23782378467, console.log);
    console.log("-- 2nd test async--");
    isPrimeAsync(23782378467, console.log);
    console.log("-- 3rd test async--");
    isPrimeAsync(23782378467, console.log);
    console.log("-- Final test async--");
    isPrimeAsync(23782378467, console.log);
}

testAsync();