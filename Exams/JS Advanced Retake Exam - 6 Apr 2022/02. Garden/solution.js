class Garden {

    constructor(number) {
        this.spaceAvailable = number;
        this.plants = [];
        this.storage = [];
    }

    addPlant(name, space) {
        if (space > this.spaceAvailable) {
            throw new Error(`Not enough space in the garden.`)
        } else {
            let plant = {};
            plant.name = name;
            plant.space = space;
            plant.ripe = false;
            plant.quantity = 0;
            this.plants.push(plant);
            this.spaceAvailable -= space;
            return `The ${name} has been successfully planted in the garden.`
        }
    }

    ripenPlant(name, quantity) {
        if (quantity <= 0) {
            throw new Error(`The quantity cannot be zero or negative.`)
        }
        for (const plant of this.plants) {
            if (plant.name === name) {
                if (plant.ripe === true) {
                    throw new Error(`The ${name} is already ripe.`)
                }
                plant.ripe = true;
                plant.quantity += quantity;
                if (quantity === 1) {
                    return `${quantity} ${name} has successfully ripened.`
                } else if (quantity > 1) {
                    return `${quantity} ${name}s have successfully ripened.`
                }
            } else {
                continue
            }
        }
        throw new Error(`There is no ${name} in the garden.`)
    }


    harvestPlant(name) {
        for (const plant of this.plants) {
            if (plant.name === name) {
                if (plant.ripe === false) {
                    throw new Error(`The ${name} cannot be harvested before it is ripe.`)
                } else if (plant.ripe === true) {
                    let newPlant = {};
                    newPlant.name = plant.name;
                    newPlant.quantity = plant.quantity;
                    this.spaceAvailable += plant.space
                    this.plants.pop();
                    this.storage.push(newPlant);
                    return `The ${name} has been successfully harvested.`
                }
            } else {
                continue
            }
        }
        throw new Error(`There is no ${name} in the garden.`)
    }

    generateReport() {
        let resultOutput = '';
        let arr = []
        resultOutput = `The garden has ${this.spaceAvailable} free space left.` + `\n`
        resultOutput += `Plants in the garden: `
        let sorted = this.plants.sort((a, b) => a.name.localeCompare(b.name));
        for (const plant of sorted) {
            arr.push(plant.name);
        }
        let test = arr.join(', ')
        resultOutput += test + `\n`
        if (this.storage.length === 0) {
            resultOutput += `Plants in storage: The storage is empty.`
        } else {
            resultOutput += `Plants in storage: `
            let array = [];
            for (const storageElement of this.storage) {
                let name = storageElement.name;
                let quantity = storageElement.quantity;
                array.push(`${name}` + ` ` + `(${quantity})`)
            }
            let testtttttt = array.join(', ')
            resultOutput += testtttttt;
        }
        return resultOutput
    }

}

const myGarden = new Garden(250)
console.log(myGarden.addPlant('apple', 20));
console.log(myGarden.addPlant('orange', 200));
console.log(myGarden.addPlant('raspberry', 10));
console.log(myGarden.ripenPlant('apple', 10));
console.log(myGarden.ripenPlant('orange', 1));
console.log(myGarden.harvestPlant('orange'));
console.log(myGarden.generateReport());








