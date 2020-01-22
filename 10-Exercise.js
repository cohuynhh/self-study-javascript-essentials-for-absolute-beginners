
function isPrimeNumber(number){
    for (let i = 2; i < number; i++) {
        if(number % i === 0 && number !== i) {
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

// console.log(isPrimeNumber(100));
// console.log(isPrimeNumber(5));
// console.log(isPrimeNumber(7));

function getPrimesNumberLessThan(number) {
    const primes = [];

    const fromDate = new Date();
    for (let i = number - 1; i > 1; i--) {
        if(isPrimeNumber(i).isPrime)
            primes.push(i);
    }
    const toDate = new Date();

    console.log(`Function took ${(toDate.getTime() - fromDate.getTime()) / 1000} seconds!`);
    
    if(primes.length > 0)
        console.log(`${primes.length} primes found! Primes are: ${primes.join(", ")}`);
    else
        console.log(`No prime found!`);    
    
    return {
        "primes" : primes,
        "totalTimeInSeconds": (toDate.getTime() - fromDate.getTime()) / 1000,
    };
}

getPrimesNumberLessThan(1000);