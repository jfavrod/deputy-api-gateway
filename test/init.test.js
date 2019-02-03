const
DeputyGateway = require('../lib'),
assert = require('assert');

describe('Inital Testing', function() {
    describe('DeputyGateway', function() {
        const gateway = new DeputyGateway('mycompany.na.deputy.com',
                'abcdefghijklmnop0123456789');

        it('Should have a get method', function() {
            assert.equal(typeof(gateway.get), 'function');
        });
    })
});
