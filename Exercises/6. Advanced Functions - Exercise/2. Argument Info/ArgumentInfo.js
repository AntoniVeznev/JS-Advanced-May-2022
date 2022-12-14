function solve(...args) {
    const inputs = Array.from(args);
    const count = new Map();

    inputs.forEach(x => {
        const type = typeof x;
        console.log(`${type}: ${x}`);

        if (!count.has(type)) {
            count.set(type, 0);
        }
        count.set(type, count.get(type) + 1);
    });

    Array.from(count.entries()).sort((a, b) => b[1] - a[1]).forEach(x => console.log(`${x[0]} = ${x[1]}`));
}