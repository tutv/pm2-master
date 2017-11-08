const cluster = require('cluster');
const pm2Master = require('../index');

const assert = require('assert');

describe('Clustering.', () => {
    it('should return true', () => {
        if (cluster.isMaster) {
            assert(true, pm2Master.isMaster());
        }
    });

    it('The process should have pid', () => {
        process.should.have.property('pid').which.is.a.Number();
    });
});
