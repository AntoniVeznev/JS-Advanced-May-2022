function solve(array) {
    let resultArray = [];
    array.sort((x, y) => x.localeCompare(y));
    for (let i = 0; i < array.length; i++) {
        let currentStringLine = array[i].split(' : ');
        let productName = currentStringLine[0];
        let productPrice = Number(currentStringLine[1]);
        let firstLetter = productName[0];
        if (!resultArray.includes(firstLetter)) {
            resultArray.push(firstLetter)
        }
        resultArray.push('  ' + productName + ': ' + productPrice)
    }
    for (const element of resultArray) {
        console.log(element)
    }
}

solve(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']);
