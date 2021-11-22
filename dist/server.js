"use strict";
var express = require('express');
var path = require('path');
var cors = require('cors');
var bodyParser = require('body-parser');
require('dotenv').config();
var server = express();
server.use(cors());
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: false }));
server.use(express.static(path.join(__dirname, 'public')));
// const dummy = require('./src/server/routes/dummy');
// server.use('/api/dummy', dummy);
server.listen(process.env.PORT || 5000, function () {
    console.log("SERVER IS LISTENING ON PORT ".concat(process.env.PORT, " AT ").concat(new Date));
});
//# sourceMappingURL=server.js.map