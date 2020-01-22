const fromDate = new Date();
const toDate = new Date();

(toDate.getTime() - fromDate.getTime()) / 1000; //in seconds


function calculateHowLong() {
    const fromDate = new Date();
    for (let index = 0; index < 10000000000; index++);
    const toDate = new Date();

    console.log(`Function took ${(toDate.getTime() - fromDate.getTime()) / 1000} seconds!`);
}

calculateHowLong();
