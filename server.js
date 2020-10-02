
const express = require("express");
const server = express();

const cors = require('cors');
server.use(cors());

const body_parser = require("body-parser");

// parse JSON (application/json content-type)
server.use(body_parser.json());

const port = 4000;

// << db setup >>
const db = require("./db");
const dbName = "Kuvat";
const collectionName = "Kuvat";

// << db init >>
db.initialize(dbName, collectionName, function(dbCollection) { // successCallback
    // get all items
    dbCollection.find().toArray(function(err, result) {
        if (err) throw err;
        console.log(result);
    });

    // << db CRUD routes >>
    server.get("/items", (request, response) => {
        // return updated list
        dbCollection.find().toArray((error, result) => {
            if (error) throw error;
            response.json(result);
            console.log(result);
        });
    });

}, function(err) { // failureCallback
    throw (err);
});


server.listen(port, () => {
    console.log(`Server listening at ${port}`);
});
