const request = require('request');

const Utils = {
    requestGet: function (url) {
        return new Promise(function (resolve, reject) {
            request(url, function callback(err, response, body) {
                if(err) {
                    console.error(err);
                    reject(err);
                }
                if (!response) {
                    resolve(null);
                } else {
                    resolve(body);
                }
            });
        });
    }
};

export default Utils;
