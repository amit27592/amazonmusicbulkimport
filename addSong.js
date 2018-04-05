var request = require('request')


module.exports = (asin) => {

    return new Promise((resolve, reject) => {
        var options = {
            method: 'POST',
            url: 'https://music.amazon.in/EU/api/cirrus/v3/',
            headers:
                {
                    'Postman-Token': 'd9ed8092-1425-9d06-b61e-4a0b4195684a',
                    'Cache-Control': 'no-cache',
                    'Content-Encoding': 'amz-1.0',
                    'csrf-ts': '1522955545',
                    'X-Amz-Target': 'com.amazon.cirrus.libraryservice.v3.CirrusLibraryServiceExternalV3.insertTracksByAsin',
                    'csrf-token': '0Ed0LC5ZkDFeAoAjeo+jIZ4fBp8JJInbnZnQKWuDTus=',
                    'Content-Type': 'application/json',
                    'csrf-rnd': '473515792'
                },
            body:
                {
                    asinList: [asin],
                    musicTerritory: 'IN',
                    mode: 'PRIME',
                    deviceType: 'A16ZV8BU3SN1N3',
                    deviceId: '26196643314376709',
                    customerId: 'A35EKV0T3VBQM2'
                },
            json: true
        };

        request(options, function (error, response, body) {
            console.log('Done for asin' + asin)
            if (error) reject(new Error(error));
            else resolve(body)
        });
    })
}


