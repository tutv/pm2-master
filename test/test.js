const assert = require('assert');
const pm2Master = require('../index');

describe('Node native.', () => {
    it('should return true', () => {
        assert(true, pm2Master.isMaster());
    });
});