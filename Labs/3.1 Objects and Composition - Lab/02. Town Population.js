function solve(array) {
    let town = {};
    for (let index = 0; index < array.length; index++) {
        let text = array[index].split(' <-> ');
        let name = text[0];
        let population = Number(text[1]);
        if (town[name] !== undefined) {
            population += town[name];
        }
        town[name] = population;
    }
    for (const townKey in town) {
        console.log(`${townKey} : ${town[townKey]}`)
    }
}

solve(['Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000']);
solve(['Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000']);