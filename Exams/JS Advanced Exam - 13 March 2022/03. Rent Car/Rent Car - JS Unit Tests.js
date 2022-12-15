describe("TEST MAIN CODE", () => {
    it("searchCar", () => {
        expect(() => rentCar.searchCar({}, 5)).to.throw('Invalid input!');
        expect(() => rentCar.searchCar('a', 5)).to.throw('Invalid input!');
        expect(() => rentCar.searchCar(5, 5)).to.throw('Invalid input!');
        expect(() => rentCar.searchCar(null, 5)).to.throw('Invalid input!');
        expect(() => rentCar.searchCar(undefined, 5)).to.throw('Invalid input!');

        expect(() => rentCar.searchCar(["Volkswagen", "BMW", "Audi"], 5)).to.throw('Invalid input!');
        expect(() => rentCar.searchCar(["Volkswagen", "BMW", "Audi"], [])).to.throw('Invalid input!');
        expect(() => rentCar.searchCar(["Volkswagen", "BMW", "Audi"], {})).to.throw('Invalid input!');
        expect(() => rentCar.searchCar(["Volkswagen", "BMW", "Audi"], null)).to.throw('Invalid input!');
        expect(() => rentCar.searchCar(["Volkswagen", "BMW", "Audi"], undefined)).to.throw('Invalid input!');

        expect(() => rentCar.searchCar(["Volkswagen", "BMW", "Audi"], "LADA")).to.throw('There are no such models in the catalog!');

        expect(rentCar.searchCar(["BMW"], "BMW")).to.equal(`There is 1 car of model BMW in the catalog!`);
    });
    it("calculatePriceOfCar", () => {

        expect(() => rentCar.calculatePriceOfCar(5, 5)).to.throw('Invalid input!');
        expect(() => rentCar.calculatePriceOfCar([], 5)).to.throw('Invalid input!');
        expect(() => rentCar.calculatePriceOfCar({}, 5)).to.throw('Invalid input!');
        expect(() => rentCar.calculatePriceOfCar(null, 5)).to.throw('Invalid input!');
        expect(() => rentCar.calculatePriceOfCar(undefined, 5)).to.throw('Invalid input!');

        expect(() => rentCar.calculatePriceOfCar("BMW", "TONI")).to.throw('Invalid input!');
        expect(() => rentCar.calculatePriceOfCar("BMW", [])).to.throw('Invalid input!');
        expect(() => rentCar.calculatePriceOfCar("BMW", {})).to.throw('Invalid input!');
        expect(() => rentCar.calculatePriceOfCar("BMW", null)).to.throw('Invalid input!');
        expect(() => rentCar.calculatePriceOfCar("BMW", undefined)).to.throw('Invalid input!');

        expect(rentCar.calculatePriceOfCar('BMW', 5)).to.equal(`You choose BMW and it will cost $225!`);
        expect(() => rentCar.calculatePriceOfCar("LADA", 5)).to.throw('No such model in the catalog!');
    });
    it("checkBudget", () => {
        expect(() => rentCar.checkBudget("toni", 'toni', 'toni')).to.throw('Invalid input!');
        expect(() => rentCar.checkBudget([], 'toni', 'toni')).to.throw('Invalid input!');
        expect(() => rentCar.checkBudget([], {}, [])).to.throw('Invalid input!');
        expect(() => rentCar.checkBudget([], {}, null)).to.throw('Invalid input!');

        expect(rentCar.checkBudget(2, 2, 10)).to.equal(`You rent a car!`);
        expect(rentCar.checkBudget(10, 10, 10)).to.equal(`You need a bigger budget!`);


    });

});