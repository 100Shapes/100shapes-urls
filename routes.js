var Joi = require('joi');
var Inert = require('inert');

module.exports = function(server) {

    server.register(Inert, function () {});

    server.route({
        method: 'GET',
        path: '/l/{short_url?}',
        handler: function(request, reply) {
            var short_url = request.params.short_url ? encodeURIComponent(request.params.short_url) : 'none';

            server.methods.translateUrl(short_url, function(err, long_url) {
                if (err) {
                    reply(err).code(404);
                } else {
                    reply.redirect(long_url);
                }
            })
        }
    });

    server.route({
        method: 'GET',
        path: '/{param*}',
        handler: {
            directory: {
                path: 'public',
                redirectToSlash: true,
                index: true
            }
        }
    });
};
