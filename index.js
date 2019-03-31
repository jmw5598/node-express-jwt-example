const fs = require('fs');
const server = require('./server');
const config = JSON.parse(fs.readFileSync('config/server.json', 'utf8'));

server.setup(config.development);
server.start();

module.exports = server;
