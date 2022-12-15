function checkIfAllDigits(number) {

    let numberToString = number.toString();
    let firstElement = Number(numberToString[0]);

    let sumOfAllNumber = firstElement;
    let areEquals = true;

    for (let i = 1; i < numberToString.length; i++) {

        let currentElement = Number(numberToString[i]);

        if (firstElement !== currentElement) {
            areEquals = false;
            sumOfAllNumber += currentElement;
        } else {
            sumOfAllNumber += currentElement;
        }
    }
    console.log(areEquals);
    console.log(sumOfAllNumber);
}

checkIfAllDigits(2222222);
checkIfAllDigits(1234);