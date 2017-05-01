//db/index.js is a new file to our twitter app

const pg = require('pg').native;
const postgresUrl = 'postgres://localhost/twitterdb';
const client = new pg.Client(postgresUrl);

// connecting to the `postgres` server
client.connect();

// make the client available as a Node module
module.exports = client;
