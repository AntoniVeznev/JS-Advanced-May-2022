function input(dayOfWeek) {

    let result;

    if (dayOfWeek === 'Monday') {
        result = Number(1);

    } else if (dayOfWeek === 'Tuesday') {
        result = Number(2);

    } else if (dayOfWeek === 'Wednesday') {
        result = Number(3);

    } else if (dayOfWeek === 'Thursday') {
        result = Number(4);

    } else if (dayOfWeek === 'Friday') {
        result = Number(5);

    } else if (dayOfWeek === 'Saturday') {
        result = Number(6);

    } else if (dayOfWeek === 'Sunday') {
        result = Number(7);

    }

    if (result === undefined) {
        console.log('error')

    } else {
        console.log(result)
    }

}

input('Monday')
input('Friday')
input('Invalid')