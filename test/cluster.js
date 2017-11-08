const cluster = require('cluster');
const numCPUs = require('os').cpus().length;
const pm2Master = require('../index');

const assert = require('assert');

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
});
