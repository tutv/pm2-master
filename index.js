exports.isMaster = () => {
    if (process.env && process.env.pm_id) {
        if (parseInt(process.env.NODE_APP_INSTANCE) === 0) {
            return true;
        }
    }

    return false;
};