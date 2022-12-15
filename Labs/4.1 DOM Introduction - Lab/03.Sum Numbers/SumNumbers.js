function calc() {
    let firstNumberInput = document.getElementById("num1").value;
    let secondNumberInput = document.getElementById("num2").value;
    let sumInput = document.getElementById("sum");
    let result = Number(firstNumberInput) + Number(secondNumberInput);
    sumInput.value = result;
}
