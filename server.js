
const express = require("express");
const server = express();

const cors = require('cors');
server.use(cors());

const body_parser = require("body-parser");

// parse JSON (application/json content-type)
server.use(body_parser.json());

const ObjectId = require('mongodb').ObjectID;

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

    //tallentaa uuden kuvan tietokantaan - vain frontista
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

    //hakee id:llä yhden kuvan
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

    //hakee MongoDb:n id:llä yhden kuvan
    server.get("/ids/:_id", (request, response) => {
        const itemId = request.params._id;
        console.log(itemId);
        //let sameId = parseInt(itemId);
        //itemId = new ObjectId(itemId);
        //console.log(ObjectId(itemId));
        dbCollection.findOne({ _id: new ObjectId(itemId) }, (error, result) => {
            if (error) throw error;
            // return item
            response.json(result);
        });
    });

    //hakee ensimmäisen, jolla on se nimi
    server.get("/names/:name", (request, response) => {
        const itemName = request.params.name;
        console.log(itemName);
        dbCollection.findOne({ name: itemName }, (error, result) => {
            if (error) throw error;
            // return item
            response.json(result);
        });
    });

    //hakee randomin dokumentin tietokannasta
    server.get("/random", (request, response) => {
        //const itemName = request.params.name;
        //console.log(itemName);
        dbCollection.aggregate([{ $sample: {size: 1 } }]).toArray((error, result) => {
            if (error) throw error;
            // return item
            response.json(result);
        });
    });

    //hakee kaikki tietyn nimiset
    server.get("/allnames/:name", (request, response) => {
        const itemName = request.params.name;
        console.log(itemName);
        dbCollection.find({ name: itemName }).toArray((error, result) => {
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

    //hakee kaikki kuvat
    server.get("/items", (request, response) => {
        // return updated list
        dbCollection.find().toArray((error, result) => {
            if (error) throw error;
            response.json(result);
        });
    });

    //nimen päivitys id:n perusteella
    //jos id on int, se on muutettava sellaiseksi myös koodissa!
    /*server.put("/updatingItems/:id/:name/", (request, response) => {
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
    });*/

    //nimen päivitys id:n perusteella
    //jos id on int, se on muutettava sellaiseksi myös koodissa!
    server.put("/updatingItems/:_id/:name/", (request, response) => {
        //const itemId = parseInt(request.params._id);
        const itemId = request.params._id;
        const itemName = request.params.name;
        console.log(itemName);
        console.log(itemId);

        //console.log("Editing item: ", itemId, " to be ", item);

        dbCollection.update({ _id: new ObjectId(itemId) }, { $set: {name: itemName}}, {multi: true}, (error, result) => {
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
