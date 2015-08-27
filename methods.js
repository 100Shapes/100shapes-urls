var Firebase = require("firebase");

module.exports = function(server) {

    server.app.ohs_firebase = new Firebase("https://100-shapes-urls.firebaseio.com/");

    server.method('addUrl', function(url, next) {
        console.log(url)
        server.app.ohs_firebase.set(url);
        return next(null, url);
    });

    server.method('getUrls', function(next) {
        server.app.ohs_firebase.child("location/city").on("value", function(snapshot) {
            console.log(snapshot.val());
            return next(null, snapshot);
        });
        return next('No items found');
    });
};
