describe("lookupChar function unit tests", function () {
    let str = "String for testing purposes";

    it('should return undefined', function () {
        expect(lookupChar(-1, 2)).to.be.equal(undefined);
    });
    it('should return undefined', function () {
        expect(lookupChar(2, "")).to.be.equal(undefined);
    });
    it('should return undefined', function () {
        expect(lookupChar("", "")).to.be.equal(undefined);
    });
    it('should return undefined', function () {
        expect(lookupChar("", {})).to.be.equal(undefined);
    });
    it('should return undefined', function () {
        expect(lookupChar({}, 1)).to.be.equal(undefined);
    });
    it('should return undefined', function () {
        expect(lookupChar(str, 1.5)).to.be.equal(undefined);
    });
    it('should return Incorrect index', function () {
        expect(lookupChar(str, 100)).to.be.equal("Incorrect index");
    });
    it('should return Incorrect index', function () {
        expect(lookupChar(str, -1)).to.be.equal("Incorrect index");
    });
    it('should return Incorrect index', function () {
        expect(lookupChar(str, 27)).to.be.equal("Incorrect index");
    });
    it('should return S', function () {
        expect(lookupChar(str, 0)).to.be.equal("S");
    });
    it('should return g', function () {
        expect(lookupChar(str, 5)).to.be.equal("g");
    });
});