var Joi = require('joi');
var Inert = require('inert');

module.exports = function(server) {

    server.register(Inert, function () {});

    server.route({
        method: 'GET',
        path: '/urls',
        handler: function(request, reply) {
            server.methods.getUrls(function(err, urls) {
                if (err) {
                    reply(err).code(404);
                } else {
                    reply(urls).code(200);
                }
            })
        }
    });

    server.route({
        method: 'POST',
        path: '/urls',
        handler: function (request, reply) {
            var url = {
                web_address: request.payload.web_address,
                source: request.payload.source,
                medium:request.payload.medium,
                name:request.payload.name
            };
            server.methods.addUrl(url, function(err, new_url) {
                if (err) {
                    reply(err).code(404);
                } else {
                    reply(new_url).code(200);
                }
            });
        },
        config: {
            validate: {
                payload: {
                    web_address: Joi.string().required().min(3),
                    source: Joi.string().required().min(3),
                    medium: Joi.string(),
                    name: Joi.string()
                }
            }
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
