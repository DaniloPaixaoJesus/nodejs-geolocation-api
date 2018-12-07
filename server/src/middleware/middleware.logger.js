module.exports = function(options) {
    return function(req, res, next) {
        if(process.env.NODE_ENV != 'production') {
            console.log('-------------------------------------------------------')
            console.log('request===>', req);
            console.log('response===>', res);
            console.log('-------------------------------------------------------')
        }
        next()
    }
}