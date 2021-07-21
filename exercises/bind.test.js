const bind = require('./bind');

describe('Binds context to function', () => {
    global.x = 1;
    
    const context = { x: 2 }; 
    
    function testThis(a) { 
        return `x = ${this.x}, a = ${a}`; 
    }

    it('testThis takes context as global if context not applied', () => {
       expect(testThis(10)).toEqual(`x = 1, a = 10`);
    });

    it('testThis takes context which was set via bind function', () => {
        const testThisContext = bind(testThis, context);
        expect(testThisContext(10)).toEqual(`x = 2, a = 10`);
    });
});