function toggle() {
    let button = document.querySelector('span[class=button]');
    let text = document.querySelector('div[id=extra]');
    if (button.textContent === 'More') {
        text.style.display = 'block'
        button.textContent = 'Less'
    } else {
        text.style.display = 'none'
        button.textContent = 'More'
    }
}