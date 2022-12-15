function getFibonator() {
    let first = 0;
    let second = 0;

    return () => {
        const result = first + second || 1;
        first = second;
        second = result;

        return result;
    }
}