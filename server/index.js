'use strict';

const express = require('express');
const app = express();
const port = require('./config/settings').port;

// configure app
require('./config')(app);

// connect mongodb
require('./mongodb')();

// register routes
require('./routes')(app);

// start the server
app.listen(port);
console.log('Server is listening at %s', port);