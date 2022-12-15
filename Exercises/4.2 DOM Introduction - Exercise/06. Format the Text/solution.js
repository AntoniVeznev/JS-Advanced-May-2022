function solve() {
    let textArea = document.getElementById('input').value;
    let div = document.getElementById('output');
    let allValidSentences = [];
    let sentencesArr = textArea.split('.');
    for (let i = 0; i < sentencesArr.length; i++) {
        let currentSentence = sentencesArr[i];
        if (currentSentence.length > 0) {
            allValidSentences.push(currentSentence + '.');
        }
    }
    while (allValidSentences.length !== 0) {
        let createP = document.createElement('p');
        let result = '';
        let size = allValidSentences.length;
        for (let i = 0; i < size; i++) {
            if (i === 3) {
                break;
            }
            let sent = allValidSentences[i];
            result += sent;
            allValidSentences.shift();
        }
        createP.textContent = result;
        div.appendChild(createP);
    }
}