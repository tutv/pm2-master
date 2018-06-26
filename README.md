# PM2 Master [![Travis branch](https://img.shields.io/travis/tutv/pm2-master/develop.svg)]() [![npm (tag)](https://img.shields.io/npm/v/pm2-master/latest.svg)]() [![GitHub issues](https://img.shields.io/github/issues/tutv/pm2-master.svg)]()

Check process is master when run with PM2

----


### Example
```javascript
const pm2Master = require('pm2-master');
if (pm2Master.isMaster()) {
    console.log('master');
} else {
    console.log('worker');
}

```
