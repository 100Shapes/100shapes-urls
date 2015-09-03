var Firebase = require("firebase");

module.exports = function(server) {

    server.method('translateUrl', function(short_url, next) {

        var ref = new Firebase("https://ohs-url-shortener.firebaseio.com/short/" + short_url).once('value', function(snapshot) {
            long_url=snapshot.val();
            return next(null, long_url);
        }, function (errorObject) {
            console.log("The read failed: " + errorObject.code);
            return next("URL does not exist");
        });
    });
};
