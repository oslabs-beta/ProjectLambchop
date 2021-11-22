const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const server = express();
server.use(cors());
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: false }));
server.use(express.static(path.join(__dirname, 'public')));

server.listen(process.env.PORT || 5000, () => {
  console.log(`SERVER IS LISTENING ON PORT ${process.env.PORT} AT ${new Date}`);
});
