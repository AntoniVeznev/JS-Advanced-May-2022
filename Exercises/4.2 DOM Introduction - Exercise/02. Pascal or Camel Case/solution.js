function solve() {
    let textInput = document.querySelector(`input[id=text]`).value;
    let typeInput = document.querySelector(`input[id=naming-convention]`).value;
    let resultText = document.querySelector("span[id=result]");
    let textArray = Array.from(textInput.split(' '));
    let finalArr = [];
    let resultString = '';
    for (let i = 0; i < textArray.length; i++) {
        let current = textArray[i].toLowerCase()
        finalArr.push(current)
    }
    for (let i = 0; i < finalArr.length; i++) {
        let currentWord = finalArr[i];
        if (typeInput === `Camel Case`) {
            if (i === 0) {
                resultString += currentWord;
            } else {
                let firstLetter = currentWord[0].toUpperCase();
                resultString += firstLetter + currentWord.slice(1);
            }
        } else if (typeInput === `Pascal Case`) {
            let firstLetter = currentWord[0].toUpperCase();
            resultString += firstLetter + currentWord.slice(1);
        } else {
            resultString += `Error!`;
            break;
        }
    }
    resultText.textContent = resultString;
}