const http = require('http');
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const viewRoutes = require('./controller/view');
var path = require('path')
require('dotenv').config()

const PORT = process.env.PORT;
//Setting Up Dynamic port allocation

const app = express();
//Creating express object

app.server = http.createServer(app);
//Create HTTP server

app.use(morgan('dev'));
//To Get Apache Log Format in Console for Handling Requests

app.use(cors({
    exposedHeaders: "*"
}));
// To Allow Cross Origin Accessability

app.use(bodyParser.json({
    limit: '50mb'
}));

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

// Setting Routes for Views
app.use('/', viewRoutes);

// Turn on that server!
app.listen(PORT, () => {
    console.log('App listening on port ', PORT);
});