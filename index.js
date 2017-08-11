'use strict';

const Hapi = require('hapi');

const server = new Hapi.Server();
server.connection({ port: 3000, host: 'localhost' });

server.register(require('hapi_plugin'), (err)=> {
    if(err) {
      throw err;

    }
});

server.route({
    method: 'GET',
    path: '/',
    handler: function (request, reply) {
        setTimeout(
            function() {
                reply('done after 5 seconds')
            }, 5000
        );
    }
});

server.start((err) => {

    if (err) {
        throw err;
    }
    console.log(`Server running at: ${server.info.uri}`);
});