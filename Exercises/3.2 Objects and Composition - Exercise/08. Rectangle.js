function rectangle(width, height, color) {
    let text = color[0].toUpperCase();
    for (let i = 1; i < color.length; i++) {
        text += color[i];
    }
    let obj = {
        width: Number(width),
        height: Number(height),
        color: text,
        calcArea() {
            return obj.width * obj.height;
        }
    }
    return obj
}

let rect = rectangle(4, 5, 'red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());








