function focused() {
    let allDiv = document.querySelectorAll("input[type=text]")
    for (const div of allDiv) {
        div.addEventListener('focus', focused);
        div.addEventListener('blur', blur);
    }

    function focused(event) {
        event.target.parentElement.className = 'focused'
    }

    function blur(event) {
        event.target.parentElement.className = 'blur'
    }
}