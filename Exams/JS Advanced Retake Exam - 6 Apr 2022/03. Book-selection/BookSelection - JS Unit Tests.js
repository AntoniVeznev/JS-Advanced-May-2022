describe('Main Test', () => {
    it('isGenreSuitable', () => {

        expect(bookSelection.isGenreSuitable('Thriller', 12)).to.equal(`Books with Thriller genre are not suitable for kids at 12 age`);
        expect(bookSelection.isGenreSuitable('Horror', 12)).to.equal(`Books with Horror genre are not suitable for kids at 12 age`);

        expect(bookSelection.isGenreSuitable('Thriller', 5)).to.equal(`Books with Thriller genre are not suitable for kids at 5 age`);
        expect(bookSelection.isGenreSuitable('Horror', 5)).to.equal(`Books with Horror genre are not suitable for kids at 5 age`);

        expect(bookSelection.isGenreSuitable('Horror', 20)).to.equal(`Those books are suitable`);
        expect(bookSelection.isGenreSuitable('Action', 10)).to.equal(`Those books are suitable`);
    })
    it('isItAffordable', () => {
        expect(bookSelection.isItAffordable(10, 5)).to.equal("You don't have enough money");

        expect(bookSelection.isItAffordable(5, 5)).to.equal("Book bought. You have 0$ left");

        expect(bookSelection.isItAffordable(5, 10)).to.equal("Book bought. You have 5$ left");

        expect(() => bookSelection.isItAffordable(5, 'toni')).to.throw('Invalid input');

        expect(() => bookSelection.isItAffordable('toni', 5)).to.throw('Invalid input');

        expect(() => bookSelection.isItAffordable(5, [])).to.throw('Invalid input');

        expect(() => bookSelection.isItAffordable({}, [])).to.throw('Invalid input');

        expect(() => bookSelection.isItAffordable({}, 5)).to.throw('Invalid input');


    })
    it('suitableTitles', () => {
        expect(bookSelection.suitableTitles([{
            title: 'The Da Vinci Code',
            genre: "Thriller"
        }], "Thriller")).to.deep.equal(['The Da Vinci Code'])

        expect(() => bookSelection.suitableTitles(1, "Thriller")).to.throw('Invalid input')

        expect(() => bookSelection.suitableTitles([{
            title: 'The Da Vinci Code',
            genre: "Thriller"
        }], 1)).to.throw('Invalid input')

    })
})