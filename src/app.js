const express = require('express');
const app = express();

app.use(express.json());

app.use("/api/v1/printer/tickets", require('./routes/tickets'));

app.listen(3000);
console.log('server on port 3000');

//module.exports = app;