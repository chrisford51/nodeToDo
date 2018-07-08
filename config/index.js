var configValues = require('./config');

module.exports = {

    getDbConnectionString: function () {
        return 'mongodb://' + configValues.uname + ':' + configValues.pwd + '@ds129811.mlab.com:29811/nodetodosample';
    }

}