describe("TEST", () => {

    it("calcPriceOfFlowers", () => {
        expect(() => flowerShop.calcPriceOfFlowers(5, 5, 5)).to.throw('Invalid input!');
        expect(() => flowerShop.calcPriceOfFlowers([], 5, 5)).to.throw('Invalid input!');
        expect(() => flowerShop.calcPriceOfFlowers({}, 5, 5)).to.throw('Invalid input!');
        expect(() => flowerShop.calcPriceOfFlowers(5, 'TONI', 5)).to.throw('Invalid input!');
        expect(() => flowerShop.calcPriceOfFlowers(5, [], 5)).to.throw('Invalid input!');
        expect(() => flowerShop.calcPriceOfFlowers(5, {}, 5)).to.throw('Invalid input!');
        expect(() => flowerShop.calcPriceOfFlowers(5, 5, "TONI")).to.throw('Invalid input!');
        expect(() => flowerShop.calcPriceOfFlowers(5, 5, [])).to.throw('Invalid input!');
        expect(() => flowerShop.calcPriceOfFlowers(5, 5, {})).to.throw('Invalid input!');

        expect(flowerShop.calcPriceOfFlowers('Rose', 2, 2)).to.equal(`You need $4.00 to buy Rose!`);

    });
    it("checkFlowersAvailable", () => {
        expect(flowerShop.checkFlowersAvailable('Rose', ["Rose", "Lily", "Orchid"])).to.equal(`The Rose are available!`);
        expect(flowerShop.checkFlowersAvailable('Lily', ["Rose", "Orchid"])).to.equal(`The Lily are sold! You need to purchase more!`);

    });
    it("sellFlowers", () => {
        expect(() => flowerShop.sellFlowers({}, 5)).to.throw('Invalid input!');
        expect(() => flowerShop.sellFlowers('toni', 5)).to.throw('Invalid input!');
        expect(() => flowerShop.sellFlowers(5, 5)).to.throw('Invalid input!');
        expect(() => flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], 'toni')).to.throw('Invalid input!');
        expect(() => flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], [])).to.throw('Invalid input!');
        expect(() => flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], {})).to.throw('Invalid input!');
        //["Rose", "Lily", "Orchid"]
        expect(flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], 0)).to.equal('Lily / Orchid');
    });
});