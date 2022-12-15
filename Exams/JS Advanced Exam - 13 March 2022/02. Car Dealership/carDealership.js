class CarDealership {
    constructor(name) {
        this.name = name;
        this.availableCars = [];
        this.soldCars = [];
        this.totalIncome = 0;
    }

    addCar(model, horsepower, price, mileage) {
        if (model === '' || horsepower < 0 || price < 0 || mileage < 0) {
            throw new Error(`Invalid input!`);
        } else {
            let car = {model, horsepower, price, mileage};
            this.availableCars.push(car);
            return `New car added: ${model} - ${horsepower} HP - ${mileage.toFixed(2)} km - ${price.toFixed(2)}$`

        }
    }

    sellCar(model, desiredMileage) {
        const car = this.availableCars.find(e => e.model === model);
        if (car === undefined) {
            throw new Error(`${model} was not found!`)
        } else {
            let {model, horsepower, price, mileage} = car;

            if (car.mileage - desiredMileage <= 40000) {
                car.price = car.price * 0.95;
                this.totalIncome += car.price;
                let newCar = {model, horsepower, price}
                this.soldCars.push(newCar);

                return `${model} was sold for ${price.toFixed(2)}$`
            } else if (car.mileage - desiredMileage > 40000) {
                car.price = car.price * 0.9;//10%
                this.totalIncome += car.price;
                let newCar = {model, horsepower, price}
                this.soldCars.push(newCar);
                return `${model} was sold for ${car.price.toFixed(2)}$`
            }
        }
    }

    currentCar() {

    }

    salesReport(criteria) {

    }

}