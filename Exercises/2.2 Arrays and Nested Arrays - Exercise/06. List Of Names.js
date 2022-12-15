function solve(array) {

    array.sort((x, y) => x.localeCompare(y))

    for (let index = 0; index < array.length; index++) {
        let indexOfElement = array.indexOf(array[index]);
        console.log(indexOfElement + 1 + '.' + array[index])
    }
}

solve(["John", "Bob", "Christina", "Ema"]);
