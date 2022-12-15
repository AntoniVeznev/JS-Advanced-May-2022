function stringElements(number, el1, el2, el3, el4, el5) {

    let num = Number(number);
    let array = [el1, el2, el3, el4, el5];
    for (let i = 0; i < array.length; i++) {
        let currentElement = array[i];
        switch (currentElement) {
            case 'chop':
                num = num / 2;
                console.log(num)
                break;
            case 'dice':
                num = Math.sqrt(num)
                console.log(num)
                break;
            case 'spice':
                num = num + 1;
                console.log(num)
                break;
            case 'bake':
                num = num * 3;
                console.log(num)
                break;
            case 'fillet':
                let twentyPercent = num * 0.2;
                num = num - twentyPercent;
                console.log(num)
                break;
        }
    }
}


stringElements('9', 'dice', 'spice', 'chop', 'bake', 'fillet');