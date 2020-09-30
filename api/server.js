let express = require('express');
let app = express();
//let url = require('url');

let cors = require('cors');
app.use(cors());

//let mysql = require('mysql');

let bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//backend http://localhost:8081/test !!
//frontend http://localhost:8080/#/showpics
app.get('/test', function (req, res) {
    console.log(req.params);
    let kissa = {id: 1, link: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Felis_silvestris_catus_lying_on_rice_straw.jpg/220px-Felis_silvestris_catus_lying_on_rice_straw.jpg", class: "ultraChuck"};

    //res.send("hello world");

    res.send(JSON.stringify(kissa));
    //res.send(kissa);
});


let server = app.listen(8081, function () {
    //var host = "localhost";
    // var host = server.address().address;
    var port = server.address().port;

    console.log("Example app listening at http://%s:%s", port)
});