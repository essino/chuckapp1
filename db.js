const MongoClient = require("mongodb").MongoClient;


const dbConnectionUrl = "mongodb+srv://Anni:Auvo100@testailu.08h7w.mongodb.net/Kuvat?retryWrites=true&w=majority";

function initialize(
    dbName,
    dbCollectionName,
    successCallback,
    failureCallback
)




{
    MongoClient.connect(dbConnectionUrl, function(err, dbInstance) {
        if (err) {
            console.log(`[MongoDB connection] ERROR: ${err}`);
            failureCallback(err); // this should be "caught" by the calling function
        } else {
            const dbObject = dbInstance.db(dbName);
            const dbCollection = dbObject.collection(dbCollectionName);
            console.log("[MongoDB connection] SUCCESS");

            successCallback(dbCollection);
        }
    });
}


module.exports = {
    initialize
};

