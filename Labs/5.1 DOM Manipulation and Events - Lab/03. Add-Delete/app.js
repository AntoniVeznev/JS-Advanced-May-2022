function addItem() {
    let input = document.querySelector('input[id=newItemText]');
    let ul = document.querySelector('ul');
    let createNewLiElement = document.createElement('li');
    createNewLiElement.textContent = input.value;
    let createA = document.createElement('a');
    createA.href = '#'
    createA.textContent = '[Delete]'
    createA.addEventListener('click', clickIT)

    function clickIT(event) {
        event.target.parentElement.remove()
    }

    createNewLiElement.appendChild(createA)
    ul.appendChild(createNewLiElement);
}



