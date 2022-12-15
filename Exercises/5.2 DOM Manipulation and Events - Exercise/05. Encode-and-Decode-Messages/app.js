function encodeAndDecodeMessages() {

    let textAreas = document.querySelectorAll('textarea');
    let button = document.querySelectorAll('button')

    button[0].addEventListener('click', encode);
    button[1].addEventListener('click', decode);

    function encode(e) {
        let encodedMassage = '';
        let input = textAreas[0].value;
        for (let i = 0; i < input.length; i++) {
            encodedMassage += String.fromCharCode(input[i].charCodeAt(0) + 1)
        }
        textAreas[1].value = encodedMassage;
        textAreas[0].value = '';
    }

    function decode(e) {
        let decodedMassage = '';
        let input = textAreas[1].value;
        for (let i = 0; i < input.length; i++) {
            decodedMassage += String.fromCharCode(input[i].charCodeAt(0) - 1);
        }
        textAreas[1].value = decodedMassage
    }
}