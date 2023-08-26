const express = require('express');
const User = require('./models/user.models');
const app = express();
require('dotenv').config();
const port = process.env.PORT;

require('./routes/user.routes')(app); // This is new
app.listen(port, () => console.log(`Listening on port: ${port}`) );
