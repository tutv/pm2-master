const cluster = require('cluster');
const numCPUs = require('os').cpus().length;
const pm2Master = require('../index');

const assert = require('assert');
const Assertion = require('should');

describe('Clustering.', () => {
    before(() => {
        if (cluster.isMaster) {
            // Fork workers.
            for (let i = 0; i < numCPUs; i++) {
                cluster.fork();
            }
        }
    });

    it('should return true', () => {
        if (cluster.isMaster) {
            assert(true, pm2Master.isMaster());
        }
    });

    it('The process should have pid', () => {
        process.should.have.property('pid').which.is.a.Number();
    });
});
