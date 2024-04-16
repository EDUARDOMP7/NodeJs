'use strict';
const app = require('./app');
const debug = require('debug')('worker:Server');
const http = require('http');

let port = process.env.PORT || '3050';
app.set('port', port);

const server = http.createServer(app);

server.listen(port);
server.on('listening', onListening);

function onListening() {
  var addr = server.address();
  var bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  debug('Listening on ' + bind);
};
