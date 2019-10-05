
//the main file for the server of the forum application

//get the right modules
const express = require('express');
const bodyParser = require('body-parser');
const pg = require('pg');
const dotEnd = require('dot-env');

//create the express app
const app = express();

//create the server
const PORT = 8080 || process.env.PORT;
app.listen(PORT, function() {
    console.log('The server has started on port number ' + PORT);
});

//connect to the database
const client = new pg.Client({
    user: 'andrusca',
    host: 'localhost',
    password: 'andrusca',
    port: 5432,
    database: 'andrusca'
});
client.connect()
    .then(() => {
        console.log('The connection to the database is succesful');
    })
    .catch((e) => {
        console.log(e);
    });

client.query('insert into test(username, age) values ($1,$2)', ['alexanruStefan12', 34])
    .then(() => console.log('Insert was succesful'))
    .catch(e => console.log(e));

client.query('select * from test')
    .then((res) => console.log(res.rows))
    .catch((e) => console.log(e));

//set upp the middleware used by the app
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

//set up the routes
app.get('/', function(req, res) {
    res.send('The server works just fine');
});