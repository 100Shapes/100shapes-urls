var Firebase = require("firebase");

module.exports = function(server) {

    server.app.ohs_firebase = new Firebase("https://ohs-url-shortener.firebaseio.com");

    server.method('translateUrl', function(short_url, next) {
        server.app.ohs_firebase.child("url").on("value", function(snapshot) {


        });
        long_url="http://this is wrong";
        return next(null, long_url);
    });
};
