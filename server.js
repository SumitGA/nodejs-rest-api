// Creating server for our application 
const http = require('http');
const app = require('./app');

const port = process.env.PORT || 3000;

// pass a listener for creating a server
const server = http.createServer(app);

server.listen(port);
