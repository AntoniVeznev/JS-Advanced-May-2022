describe("TEST", () => {

    it("isItExpensive", () => {
        expect(carService.isItExpensive('Engine')).to.equal(`The issue with the car is more severe and it will cost more money`);
        expect(carService.isItExpensive('Transmission')).to.equal(`The issue with the car is more severe and it will cost more money`);
        expect(carService.isItExpensive('Toni')).to.equal(`The overall price will be a bit cheaper`);
    });
    it("discount", () => {
        expect(() => carService.discount(5, '5')).to.throw('Invalid input');
        expect(() => carService.discount('5', 5)).to.throw('Invalid input');
        expect(() => carService.discount([], 5)).to.throw('Invalid input');
        expect(() => carService.discount({}, 5)).to.throw('Invalid input');
        expect(() => carService.discount(null, 5)).to.throw('Invalid input');
        expect(() => carService.discount(undefined, 5)).to.throw('Invalid input');
        expect(() => carService.discount(5, [])).to.throw('Invalid input');
        expect(() => carService.discount(5, {})).to.throw('Invalid input');
        expect(() => carService.discount(5, null)).to.throw('Invalid input');
        expect(() => carService.discount(5, undefined)).to.throw('Invalid input');
        expect(carService.discount(3, 5)).to.equal(`Discount applied! You saved 0.75$`);
        expect(carService.discount(1, 5)).to.equal(`You cannot apply a discount`);
    });
    it("partsToBuy", () => {
        expect(() => carService.partsToBuy(5, [])).to.throw('Invalid input');
        expect(() => carService.partsToBuy('5', [])).to.throw('Invalid input');
        expect(() => carService.partsToBuy({}, [])).to.throw('Invalid input');
        expect(() => carService.partsToBuy(null, [])).to.throw('Invalid input');
        expect(() => carService.partsToBuy(undefined, [])).to.throw('Invalid input');
        expect(() => carService.partsToBuy([], 5)).to.throw('Invalid input');
        expect(() => carService.partsToBuy([], '5')).to.throw('Invalid input');
        expect(() => carService.partsToBuy([], {})).to.throw('Invalid input');
        expect(() => carService.partsToBuy([], null)).to.throw('Invalid input');
        expect(() => carService.partsToBuy([], undefined)).to.throw('Invalid input');
        expect(carService.partsToBuy([{part: "blowoff valve", price: 145}, {
            part: "coil springs",
            price: 230
        }], ["blowoff valve", "injectors"])).to.equal(145);
        expect(carService.partsToBuy([], ["blowoff valve", "injectors"])).to.equal(0);

    });
});