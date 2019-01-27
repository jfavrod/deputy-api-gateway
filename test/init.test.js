const
DeputyGateway = require('../lib'),
assert = require('assert');

describe('Inital Testing', function() {
    describe('DeputyGateway', function() {
        const gateway = new DeputyGateway();
        var myLocationData;

        it('Should have a get method', function() {
            assert.equal(typeof(gateway.get), 'function');
        });
    })
});
