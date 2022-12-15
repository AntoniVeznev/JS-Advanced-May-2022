function subtract() {
    let firstNumber = Number(document.querySelector('input[id=firstNumber]').value);
    let secondNumber = Number(document.querySelector('input[id=secondNumber]').value);
    let result = document.getElementById('result');
    result.textContent = firstNumber - secondNumber;
}