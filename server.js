
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

    server.post("/items/", (request, response) => {
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

    //hakee id:llä
    server.get("/items/:id", (request, response) => {
        const itemId = request.params.id;
        console.log(itemId);
        let sameId = parseInt(itemId);
        dbCollection.findOne({ id: sameId }, (error, result) => {
            if (error) throw error;
            // return item
            response.json(result);
        });
    });

    //hakee ensimmäisen, jolla on se nimi; voisi muuttaa, että hakee kaikki sen nimiset
    server.get("/names/:name", (request, response) => {
        const itemName = request.params.name;
        console.log(itemName);
        dbCollection.findOne({ name: itemName }, (error, result) => {
            if (error) throw error;
            // return item
            response.json(result);
        });
    });

    //hakee kaikki tietyn söpöys-luokan dokumentit
    server.get("/cutenesses/:cuteness", (request, response) => {
        const itemCuteness = request.params.cuteness;
        console.log(itemCuteness);
        dbCollection.find({ cuteness: itemCuteness }).toArray((error, result) => {
            if (error) throw error;
            // return item
            response.json(result);
        });
    });

    //dbCollection.find().toArray((error, result) => {

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

    //nimen päivitys id:n perusteella
    //jos id on int, se on muutettava sellaiseksi myös koodissa!
    server.put("/updatingItems/:id/:name/", (request, response) => {
        const itemId = parseInt(request.params.id);
        const itemName = request.params.name;
        console.log(itemName);
        console.log(itemId);

        //console.log("Editing item: ", itemId, " to be ", item);

        dbCollection.update({ id: itemId }, { $set: {name: itemName}}, {multi: true}, (error, result) => {
            if (error) throw error;
            // send back entire updated list, to make sure frontend data is up-to-date
            dbCollection.find().toArray(function(_error, _result) {
                if (_error) throw _error;
                response.json(_result);
            });
        });
    });

    //cuteness-tason pävitys nimen perusteella
    server.put("/updatingCuteness/:name/:cuteness/", (request, response) => {
        const itemName = request.params.name;
        const itemCuteness = request.params.cuteness;
        console.log(itemName);
        console.log(itemCuteness);

        dbCollection.update({ name: itemName }, { $set: {cuteness: itemCuteness}}, {multi: true}, (error, result) => {
            if (error) throw error;
            // send back entire updated list, to make sure frontend data is up-to-date
            dbCollection.find().toArray(function(_error, _result) {
                if (_error) throw _error;
                response.json(_result);
            });
        });
    });

}, function(err) { // failureCallback
    throw (err);
});




server.listen(port, () => {
    console.log(`Server listening at ${port}`);
});
