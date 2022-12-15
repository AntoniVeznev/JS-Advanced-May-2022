function create(words) {
    let mainDiv = document.getElementById('content');
    for (const word of words) {
        let div = document.createElement('div');
        let p = document.createElement('p');
        p.style.display = 'none'
        p.textContent = word;
        div.appendChild(p)
        mainDiv.appendChild(div)
        div.addEventListener('click', show);

        function show(event) {
            let kid = event.target.firstChild;
            kid.style.display = 'block'
        }
    }
}