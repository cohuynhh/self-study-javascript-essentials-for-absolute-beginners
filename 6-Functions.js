function isGreaterThan10(number) {
    if (number > 10)
        return true;
    else
        return false;
}


function isGreaterThan10_v2(number) {
    return (number > 10);
}

function isEven(number) {
    if(number % 2 === 0) return true; else return false;
}

function isEven_v2(number) {
    return (number % 2 === 0 ? true : false);
}

function printTime() {
    console.log(new Date());
    setTimeout(printTime, 3000);
}

printTime();