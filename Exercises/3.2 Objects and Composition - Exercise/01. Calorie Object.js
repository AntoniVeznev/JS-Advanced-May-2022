function solve(array) {
    let repository = {};
    for (let i = 0; i < array.length; i += 2) {
        let current1 = array[i];
        let current2 = array[i + 1];
        repository[current1] = Number(current2)
    }
    return repository
}

solve(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);
