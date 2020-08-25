const config = require('config');
const express = require('express');
const cors = require('cors');
const app = express();

//Use to resolve CORS issues
app.use(cors());


const creditRouter = require('./routes/credit.js');
app.use('/credit', creditRouter);

//Configuration
console.log('Application Name: ' + config.get('name'));
console.log('Database Server URL: ' + config.get('url'));
console.log('Database Name: ' + config.get('database'));

//Environment variable for PORT
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Listening on port ${port} ...`));