//db/index.js is a new file to our twitter app
//This driver, pg, allows us to use JavaScript to send queries to our database. 

const pg = require('pg').native;
const postgresUrl = 'postgres://localhost/dbname';
const client = new pg.Client(postgresUrl);

// connecting to the `postgres` server
client.connect();

// make the client available as a Node module
module.exports = client;
