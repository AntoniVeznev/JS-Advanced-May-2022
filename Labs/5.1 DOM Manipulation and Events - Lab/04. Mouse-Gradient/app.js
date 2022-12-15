function attachGradientEvents() {
    let mainLine = document.getElementById(`gradient`);
    let result = document.getElementById(`result`);
    mainLine.addEventListener('mousemove', moveMouse);

    function moveMouse(event) {
        result.textContent = Math.floor(event.offsetX / mainLine.clientWidth * 100) + `%`;
    }
}