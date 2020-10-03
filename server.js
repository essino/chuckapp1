
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

    server.post("/items", (request, response) => {
        const item = request.body;
        dbCollection.insertOne(item, (error, result) => { // callback of insertOne
            if (error) throw error;
            // return updated list
            dbCollection.find().toArray((_error, _result) => { // callback of find
                if (_error) throw _error;
                response.json(_result);
            });
        });
    });

    //findOne tuntuu toimivan vain int-muotoisella parametrilla
    /*server.get("/items/:id", (request, response) => {
        const itemId = request.params.id;
        console.log(itemId);
        let sameId = parseInt(itemId);
        dbCollection.findOne({ id: sameId }, (error, result) => {
            if (error) throw error;
            // return item
            response.json(result);
        });
    });*/

    //ei toimi, siksikö, että on nimi on string?
    server.get("/items/:name", (request, response) => {
        const itemName = request.params.name;
        console.log(itemName);
        dbCollection.find({ name: itemName }, (error, result) => {
            if (error) throw error;
            // return item
            response.json(result);
        });
    });

    //toimii int-muotoisella parametrilla
    /*server.get("/ids", (request, response) => {
        const itemName = request.query.id;
        console.log(itemName);
        let thingId = parseInt(itemName);
        dbCollection.findOne({ id: thingId }, (error, result) => {
            if (error) throw error;
            // return item
            response.json(result);

        });
    });*/

    server.get("/items", (request, response) => {
        // return updated list
        dbCollection.find().toArray((error, result) => {
            if (error) throw error;
            response.json(result);
        });
    });


}, function(err) { // failureCallback
    throw (err);
});




server.listen(port, () => {
    console.log(`Server listening at ${port}`);
});
