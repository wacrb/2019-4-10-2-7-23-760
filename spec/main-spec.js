const main = require('../main/main');

describe('main()', () =>  {
    it('within 2km and parking' , () => {
        let summary = main(1,5);
        expect(summary).toBe(7);
    });
    it('between 2km and 8km and parking' , () =>  {
        let summary = main(7,10);
        expect(summary).toBe(13);
    });
    it('more than 8km and parking' , () => {
        let summary = main(10,20);
        expect(summary).toBe(18);
    });
    it('more than 8km and no parking' , () => {
        let summary = main(15,0);
        expect(summary).toBe(19);
    });
});
