function solve(array) {
    let commandsArray = [];
    let townInfoArray = [];
    let finalArray = [];
    let firstLine = array[0].split('|');
    let newArr = firstLine.slice(1, firstLine.length - 1);
    commandsArray.push(newArr)
    for (let index = 1; index < array.length; index++) {
        let current = array[index].split('|');
        let newArr = current.slice(1, current.length - 1);
        townInfoArray.push(newArr)
    }
    let town = commandsArray[0];
    let latitude = commandsArray[1];
    let longitude = commandsArray[2];
    for (let i = 0; i < townInfoArray.length; i++) {
        let current = townInfoArray[i];
        let townName = current[0].trim();
        let firstNumber = Number(current[1]).toFixed(2).trim();
        let secondNumber = Number(current[2]).toFixed(2).trim();
        let object = {
            Town: townName,
            Latitude: Number(firstNumber),
            Longitude: Number(secondNumber)
        };
        finalArray.push(object)
    }
    console.log(JSON.stringify(finalArray))
}

solve(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']);