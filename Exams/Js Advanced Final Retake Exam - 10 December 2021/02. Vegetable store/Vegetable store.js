class VegetableStore {
    constructor(owner, location) {
        this.owner = owner;
        this.location = location;
        this.availableProducts = [];
    }

    loadingVegetables(vegetables) {
        let typeArray = [];
        for (const vegetable of vegetables) {
            let [type, quantity, price] = vegetable.split(' ');
            quantity = Number(quantity);
            price = Number(price);
            let prod = this.availableProducts.find(a => a.type === type);
            if (prod === undefined) {
                let product = {type, quantity, price};
                this.availableProducts.push(product);
                typeArray.push(type);
            } else {
                prod.quantity += quantity;
                if (prod.price < price) {
                    prod.price = 0;
                    prod.price = price;
                }
            }
        }
        return `Successfully added ${typeArray.join(', ')}`;
    }

    buyingVegetables(selectedProducts) {
        let totalPrice = 0.00;
        for (const product of selectedProducts) {
            let [type, quantity] = product.split(' ');
            quantity = Number(quantity);
            let prod = this.availableProducts.find(a => a.type === type);
            if (prod === undefined) {
                throw new Error(`${type} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`)
            } else if (prod.quantity < quantity) {
                throw new Error(`The quantity ${quantity} for the vegetable ${type} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`)
            } else {
                totalPrice += (prod.price * quantity);
                prod.quantity -= quantity;
            }
        }
        return `Great choice! You must pay the following amount $${totalPrice.toFixed(2)}.`
    }

    rottingVegetable(type, quantity) {
        quantity = Number(quantity);
        for (const product of this.availableProducts) {
            let prod = this.availableProducts.find(a => a.type === type);
            if (prod === undefined) {
                throw new Error(`${type} is not available in the store.`)
            } else {
                if (quantity > prod.quantity) {
                    prod.quantity = 0;
                    return `The entire quantity of the ${type} has been removed.`
                } else {
                    prod.quantity -= quantity;
                    return `Some quantity of the ${type} has been removed.`
                }
            }
        }
    }

    revision() {
        let result = 'Available vegetables:' + `\n`;
        let sort = this.availableProducts.sort((a, b) => a.price - b.price);
        for (const element of sort) {
            let littleResult = `${element.type}-${element.quantity}-$${element.price}`;
            result += littleResult + `\n`;
        }
        result += `The owner of the store is ${this.owner}, and the location is ${this.location}.`
        return result;
    }
}