function solve(arr, type) {
    switch (type) {
        case 'asc':
            return arr.sort((a, b) => a - b);
        case 'desc':
            return arr.sort((a, b) => b - a);
    }
}