describe('Test', () => {
    it('hiringEmployee', () => {
        expect(() => companyAdministration.hiringEmployee('Ivan', 'Dev Ops', 5)).to.throw('We are not looking for workers for this position.');
        expect(companyAdministration.hiringEmployee('Ivan', 'Programmer', 3)).to.equal('Ivan was successfully hired for the position Programmer.');
        expect(companyAdministration.hiringEmployee('Ivan', 'Programmer', 10)).to.equal('Ivan was successfully hired for the position Programmer.');
        expect(companyAdministration.hiringEmployee('Ivan', 'Programmer', 1)).to.equal('Ivan is not approved for this position.');


    })
    it('calculateSalary', () => {
        expect(() => companyAdministration.calculateSalary('string')).to.throw('Invalid hours');
        expect(() => companyAdministration.calculateSalary(-15)).to.throw('Invalid hours');


        expect(companyAdministration.calculateSalary(150)).to.equal(15 * 150);
        expect(companyAdministration.calculateSalary(200)).to.equal(15 * 200 + 1000);


    })
    it('firedEmployee', () => {
        expect(() => companyAdministration.firedEmployee({}, 1)).to.throw("Invalid input");
        expect(() => companyAdministration.firedEmployee(5, 1)).to.throw("Invalid input");
        expect(() => companyAdministration.firedEmployee('string', 1)).to.throw("Invalid input");
        expect(() => companyAdministration.firedEmployee([], 'b')).to.throw("Invalid input");
        expect(() => companyAdministration.firedEmployee([], 1, 55)).to.throw("Invalid input");
        expect(() => companyAdministration.firedEmployee(['Peter', 'Toni'], 2)).to.throw("Invalid input");
        expect(() => companyAdministration.firedEmployee(['Peter', 'Toni'], 3)).to.throw("Invalid input");
        expect(() => companyAdministration.firedEmployee(['Peter', 'Toni'], -59)).to.throw("Invalid input");
        expect(companyAdministration.firedEmployee(['Ivan', 'Toni'], 1)).to.equal('Ivan')
    })
})