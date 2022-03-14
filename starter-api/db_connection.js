const Pool = require("pg").Pool; //this Pool class allows us to set a configuration for what or where we want to connect that database

// Connection to local postgres
const pool = new Pool({
    user: "postgres",
    password: "admin",
    database: "team_db",
    host: "localhost",
    port: 5432
});

// Connecting to Heroku Postgres
// const pool = new Pool({
//     user: "kpkmmsvnzhzaiq",
//     password: "484cc8b2ebb30ef4d15f4018322f6514c6c6e28b57e4c82d79eecff147b01f34",
//     database: "dsojd2p44t0mr",
//     host: "ec2-34-231-183-74.compute-1.amazonaws.com",
//     port: 5432
// });


module.exports = pool;
