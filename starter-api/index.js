const express = require('express');
const app = express();

const pool = require("./db_connection");

app.use(express.json()) // this helps use to acces the req.body in json

const cors = require("cors");

app.use(express.json()) // this helps use to acces the req.body in json

app.use(
    cors({
        origin: "http://127.0.0.1:5502",
        // methods: ["GET", "POST", "PUT", "DELETE"]
    })
)

// app.use(function (req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
// });


// Create a Director
app.post("/director", async(req, res) => {
    console.log(req.body);
    try {
        // await
        // console.log(req.body);
        const {photo, name, position} = req.body;
        console.log(name);
        console.log(position);
        console.log(photo);


        const newDirector = await pool.query(
            "INSERT INTO director (dir_photo, dir_name, dir_position) VALUES ($1, $2, $3) RETURNING *", 
            // "INSERT INTO director (dir_photo, dir_name, dir_position) VALUES ($1, $2, $3) ", 

            [photo, name, position]
        );
        

        // console.log(newDirector);
        res.json(newDirector.rows[0]);
        // res.json("Director was successfully updated");

    } catch (err) {
        console.error(err.message);
    }
});

// get all Director
app.get("/director", async (req, res) => {
    try {
        var allDirectors = await pool.query("SELECT * FROM director");
        res.json(allDirectors.rows);
    } catch (err) {
        console.error(err.message);
    }
});

// get a Director
app.get("/director/:id", async (req, res) => {
    const {id} = req.params;
    try {
        var director = await pool.query("SELECT * FROM director WHERE dir_id = $1", [id]);
    } catch (err) {
        console.error(err.message);
    }

    res.json(director.rows[0]);
});

// update a Director
app.put("/director/:id", async (req, res) => {
    const {id} = req.params;
    const {photo, name, position} = req.body;
    var updateDirector = await pool.query("UPDATE director SET dir_photo = $1, dir_name = $2, dir_position = $3 WHERE dir_id = $4", [photo, name, position, id]);
    res.json("Director was updated");
});

// delete a Director
app.delete("/director/:id", async (req, res) => {
    const {id} = req.params;
    const deleteDirector = await pool.query("DELETE FROM director WHERE dir_id = $1", [id]);

    res.json("Director was successfully deleted");
});

app.listen(3000, () => {
    console.log("server is listening on port 3000");
});