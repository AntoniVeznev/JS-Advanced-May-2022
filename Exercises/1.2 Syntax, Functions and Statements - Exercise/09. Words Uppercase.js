function f(text) {
    console.log(text.toUpperCase().match(/\w+/g).join(', '));
}

f('Hi, how are you?')