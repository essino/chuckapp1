/**Getting Express */
const express = require("express");
const server = express();

/**Enabling CORS*/
const cors = require('cors');
server.use(cors());

/**Getting bory-parser */
const body_parser = require("body-parser");

/**Parsing JSON (application/json content-type)*/
server.use(body_parser.json());

/**Enabling the use  of MongoDB id numbers */
const ObjectId = require('mongodb').ObjectID;

/**Creating the right port*/
const port = 4000;

/** db setup */
const db = require("./db");
const dbName = "Kuvat";
const collectionName = "Kuvat";

/** db init */
db.initialize(dbName, collectionName, function(dbCollection) { // successCallback
    dbCollection.find().toArray(function(err, result) {
        if (err) throw err;
        console.log(result);
    });

    /**CRUD requests */

    /**API request to insert a new picture into the db, only available from the UI */
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

    /**API request to get one picture from the db with the MongoDB id number */
    server.get("/ids/:_id", (request, response) => {
        const itemId = request.params._id;
        console.log(itemId);
        dbCollection.findOne({ _id: new ObjectId(itemId) }, (error, result) => {
            if (error) throw error;
            // return item
            response.json(result);
        });
    });

    /**API request to get the first picture from the db with the specified name */
    server.get("/names/:name", (request, response) => {
        const itemName = request.params.name;
        console.log(itemName);
        dbCollection.findOne({ name: itemName }, (error, result) => {
            if (error) throw error;
            // return item
            response.json(result);
        });
    });

    /**API request to get a picture from the db */
    server.get("/random", (request, response) => {
        //const itemName = request.params.name;
        //console.log(itemName);
        dbCollection.aggregate([{ $sample: {size: 1 } }]).toArray((error, result) => {
            if (error) throw error;
            // return item
            response.json(result);
        });
    });

    /**API request to get all pictures from the db with the specified name*/
    server.get("/allnames/:name", (request, response) => {
        const itemName = request.params.name;
        console.log(itemName);
        dbCollection.find({ name: itemName }).toArray((error, result) => {
            if (error) throw error;
            // return item
            response.json(result);
        });
    });

    /**API request to get all pictures from the db with the specified cuteness class*/
    server.get("/cutenesses/:cuteness", (request, response) => {
        const itemCuteness = request.params.cuteness;
        console.log(itemCuteness);
        dbCollection.find({ cuteness: itemCuteness }).toArray((error, result) => {
            if (error) {
                console.log(error);
                response.json(error);
                throw error;
            } else {
                response.json(result);
                //console.log("Success");
            }

        });
    });

    /**API request to get all pictures from the db*/
    server.get("/items", (request, response) => {
        // return updated list
        dbCollection.find().toArray((error, result) => {
            if (error) throw error;
            response.json(result);
        });
    });

    /**Editing a document's name with the id number */
    server.put("/updatingItems/:_id/:name/", (request, response) => {
        //const itemId = parseInt(request.params._id);
        const itemId = request.params._id;
        const itemName = request.params.name;
        console.log(itemName);
        console.log(itemId);
        dbCollection.update({ _id: new ObjectId(itemId) }, { $set: {name: itemName}}, {multi: true}, (error, result) => {
            if (error) {
                console.log("ERROR!1");
                response.json("error1");
                throw error;
            } else {
                // send back entire updated list, to make sure frontend data is up-to-date
                dbCollection.find().toArray(function (_error, _result) {
                    if (_error) {
                        console.log("ERROR!2");
                        response.json("error2");
                        throw _error;
                    } else {
                        response.json(_result);
                    }
                });
            }});
    });

    /**Editing a document's cuteness level with the name */
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

    /**Editing a document's address with the id number */
    server.put("/updatingLink", (request, response) => {
        const itemId = request.query._id;
        const itemAddress = request.query.address;
        console.log(itemAddress);
        console.log(itemId);
        //e.g. http://localhost:4000/updatingLink?_id=5f7c4a411728214d28445e63&address=www.google.fi
        dbCollection.update({ _id: new ObjectId(itemId) }, { $set: {address: itemAddress}},/* {multi: true},*/ (error, result) => {
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

/**Listening to port */
server.listen(port, () => {
    console.log(`Server listening at ${port}`);
});
