function extract(content) {
    let selectText = document.getElementById(content).textContent;
    let pattern = /\((.+?)\)/g;
    let result = '';
    let match = pattern.exec(selectText);
    while (match!=null){
        result+=match[1] + '; ';
        match = pattern.exec(selectText);
    }
    return result
}