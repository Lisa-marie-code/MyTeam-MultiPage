const Pool = require("pg").Pool; //this Pool class allows us to set a configuration for what or where we want to connect that database

const pool = new Pool({
    user: "postgres",
    password: "admin",
    database: "team_db",
    host: "localhost",
    port: 5432
});
module.exports = pool;
