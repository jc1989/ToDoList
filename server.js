const express = require("express");
const serverApp = express();
const axios = require('axios');

let counter = 0;

axios.get('http://localhost:3000/');



serverApp.use(express.static(__dirname + '/public'));

serverApp.get("/add", function(request, response) {
    counter++;
    response.send(counter.toString());
});

serverApp.get("/delete", function(request, response) {
    counter--;
    response.send(counter.toString());
});

serverApp.get("/complete", function(request, response){
    counter = 0;
})

serverApp.get("/list", function(request, response) {
    response.send(counter.toString());
});

serverApp.listen(3000, function() {
    console.log("My Server is listening on port 3000!");
});