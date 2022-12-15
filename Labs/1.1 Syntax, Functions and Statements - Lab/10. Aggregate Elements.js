function input(array) {

    let sum = 0;
    let oneDeviToNumber = 0;
    let concatString = '';

    for (let i = 0; i < array.length; i++) {

        let currentElement = array[i];
        sum += currentElement;
        oneDeviToNumber += 1 / currentElement;
        concatString += currentElement;
    }
    console.log(sum);
    console.log(oneDeviToNumber);
    console.log(concatString);
}

input([1, 2, 3]);
input([2, 4, 8, 16]);