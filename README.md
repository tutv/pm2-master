# PM2 Master

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