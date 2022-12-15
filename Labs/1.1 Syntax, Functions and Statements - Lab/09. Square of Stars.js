function input(number) {

    let defaultString = '* * * * *';

    if (number === undefined || isNaN(number) || number === null || number === 0) {
        for (let i = 1; i <= 5; i++) {
            console.log(defaultString)
            defaultString = '';
            for (let j = 1; j <= 5; j++) {
                defaultString = defaultString + '*' + ' ';
            }
        }

    } else {
        defaultString = '';
        for (let i = 1; i <= number; i++) {
            for (let j = 1; j <= number; j++) {
                defaultString = defaultString + '*' + ' ';
            }
            console.log(defaultString);
            defaultString = '';
        }
    }
}