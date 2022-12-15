function solve(array) {
    let town = {};
    for (let index = 0; index < array.length; index++) {
        let currentString = array[index].split(' | ');
        let productName = currentString[1];
        let townName = currentString[0];
        let productPrice = Number(currentString[2]);
        if (!town.hasOwnProperty(productName)) {
            town[productName] = {townName, productPrice};
        } else {
            if (productPrice < town[productName].productPrice) {
                town[productName] = {townName, productPrice}
            }
        }
    }
    let newShit = Object.keys(town);
    for (let i = 0; i < newShit.length; i++) {
        let currentProductName = newShit[i];
        console.log(`${currentProductName} -> ${town[currentProductName].productPrice} (${town[currentProductName].townName})`)
    }
}

solve(['Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10']);