function factory(lib, list) {
    const result = [];
    for (const element of list) {
        const object = {};
        object.name = element.template.name;
        result.push(object)
        let commandsArray = element.parts;
        for (const partsElement of commandsArray) {
            object[partsElement] = lib[partsElement]
        }
    }
    return result;
}

const library = {
    print: function () {
        console.log(`${this.name} is printing a page`);
    },
    scan: function () {
        console.log(`${this.name} is scanning a document`);
    },
    play: function (artist, track) {
        console.log(`${this.name} is playing '${track}' by ${artist}`);
    },
};
const orders = [
    {
        template: {name: 'ACME Printer'},
        parts: ['print']
    },
    {
        template: {name: 'Initech Scanner'},
        parts: ['scan']
    },
    {
        template: {name: 'ComTron Copier'},
        parts: ['scan', 'print']
    },
    {
        template: {name: 'BoomBox Stereo'},
        parts: ['play']
    }
];
const products = factory(library, orders);
console.log(products);